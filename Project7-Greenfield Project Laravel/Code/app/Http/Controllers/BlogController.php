<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Blog;
use App\Comment;
use Illuminate\Support\Facades\DB;
class BlogController extends Controller
{
    public function index() {
    $blogs = Blog::paginate(9);
    return view ("Pages.blog",compact("blogs"));
    }
    public function blogDetails($id) {
        $blogs = DB::table('blogs')
            ->select("blogs.id","blogs.heading","blogs.body","blogs.image","customers.name","customers.image AS customer_image")
            ->where('blogs.id',$id)
            ->join("customers", "customers.id", "blogs.customer_id")
            ->get();
        $blog = $blogs[0];

//        ==========
        $comments = DB::table('comments')
            ->select("comments.comment","customers.name","customers.image")
            ->where("comments.blog_id",$id)
            ->join("customers", "customers.id", "comments.customer_id")
        ->get();

    return view ("Pages.blog-details",compact("blog","comments"));
    }

    public function add(Request $request)
    {
        request()->validate([
            'heading' => 'required|min:4',
            'body' => 'required|min:200|max:65535',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg',
        ]);
        if (!empty(request()->image)) {
            $imageName = time() . '.' . request()->image->getClientOriginalExtension();
            request()->image->move(public_path('images'), $imageName);
        } else {
            $imageName = 'default.png';
        }
        $id = session('loginUser')['id'];
        $blog=new Blog;
        $blog->heading = $request->get("heading");
        $blog->body = $request->get("body");
        $blog->image = $imageName;
        $blog->customer_id = $id;
        $blog->save();
        return redirect('/blog');

    }
    public function search(Request $request)
    {
        $search = $request->input('search');
        $blogs = Blog::query()
            ->where('heading', 'LIKE', "%{$search}%" )
            ->orWhere('body', 'LIKE', "%{$search}%")
            ->paginate(9);

        return view('Pages.blog', compact('blogs'));
    }
//    ================
    public function addComment(Request $request)
    {
        $customer_id = session('loginUser')['id'];
        $blog_id  = $request->id;
        $request->validate([
            'comment' => 'required',
        ]);

        $comment = new Comment();
        $comment->customer_id = $customer_id;
        $comment->blog_id  = $blog_id;
        $comment->comment = $request->get('comment');
        $comment->save();
        return back();
    }
}
