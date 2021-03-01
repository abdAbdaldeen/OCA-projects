-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2021 at 05:15 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pro7`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default.png',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `password`, `image`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@exporso.com', '123456', 'default.png', '2021-02-01 11:11:07', '2021-02-01 11:11:07'),
(2, 'a', 'a', 'a', 'default.png', '2021-02-01 20:10:03', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `heading` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default.png',
  `state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Pending',
  `customer_id` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `heading`, `body`, `image`, `state`, `customer_id`, `created_at`, `updated_at`) VALUES
(3, 'History of the bicycle', '<p>Biking today has risen to be a very good form of exercise but it is more than that people race both mountain bikes and road bikes around the world. Bikes have been included in both of the world wars and made a cheaper way for soldiers to travel farther distances than having to ride a horse. Bikes that could be ridden without your feet touch the ground have been around since the 1860s. Since then great advancements have been made to them including easily adjustable gears and lighter materials to build them with such as aluminum, carbon fiber, and titanium. These are all things that make the bike a great revolutionary form of getting around with quickness and ease.<br />\r\nThe design of a bike originated from a device called the Draisienne. It was made in 1817 by Baron von Drais. He made this machine so he could get around his gardens faster. The machine was made completely of wood and had a bar that ran between two wheels. He would straddle the bar and push off the ground in order to move. The front-wheel was steerable so he could maneuver around the gardens.&nbsp;</p>\r\n\r\n<p><img alt=\"\" src=\"https://upload.wikimedia.org/wikipedia/en/2/25/Velocipede_race_in_1868.png\" style=\"height:1036px; width:1559px\" /></p>\r\n\r\n<p>These are all things that make the bike a great revolutionary form of getting around with quickness and ease.<br />\r\nThe design of a bike originated from a device called the Draisienne. It was made in 1817 by Baron von Drais. He made this machine so he could get around his gardens faster. The machine was made completely of wood and had a bar that ran between two wheels. He would straddle the bar and push off the ground in order to move. The front-wheel was steerable so he could maneuver around the gardens.&nbsp;</p>', '1614534644.jpg', 'Approved', 2, '2021-02-28 15:50:44', '2021-02-28 18:11:03'),
(6, 'Cycling As A Bicycle', '<p>1. INTRODUCTION<br />\r\nCycling is a low-cost, effective mode of transportation that is quiet, energy efficient, versatile, provides physical activity, produces no pollution, reduces greenhouse gas emission, helps improve climate change, improves air quality and overall traffic management, supports sustainable development, provides convenient transport, offers alternatives to driving on congested roadways, supports social interaction and can be fun. As a vehicle, a bike consumes no fossil fuels and produces no greenhouse emissions, whilst providing an alternative to private automobile in ensuring mobility of people and light goods.<br />\r\n<br />\r\nBicycles are efficient in their use of public space and supporting healthy lifestyles, making communities better place to live. Additionally, they are cheap to acquire and maintain, and are dependable. Bikes are flexible vehicles that can operate in a wide variety of settings and environments. Like every <a href=\"https://www.123helpme.com/topics/mode-of-transport\">mode of transport</a>, the <a href=\"https://www.123helpme.com/topics/bicycle\">bicycle</a> has a specific role to play based on its capacities and operating characteristics. Bicycles are consistently regarded as a viable alternative to the automobile for short personal trips and are an important component of the transportation systems of many cities and communities around the world.</p>\r\n\r\n<p><img alt=\"\" src=\"https://i.imgur.com/1SA1VCF.jpg\" style=\"height:2717px; width:4061px\" /></p>\r\n\r\n<p>To give an idea of the potential for bicycling to play a significant role in the transportation network, one can look to the Netherlands as an example. Perhaps more than anywhere in the world, <a href=\"https://www.123helpme.com/topics/cycling\">cycling</a> is synonymous with Dutch culture, and the bicycle is used for almost a quarter of all trips. In the capital city of Amsterdam, bicycles are used for close to 40% of trips. Similar bicycle mode splits of 30-40% are also realized in other northern European countries like Sweden and Denmark.<br />\r\n&nbsp;</p>', '1614535265.jpg', 'Approved', 2, '2021-02-28 16:01:05', '2021-02-28 16:13:27'),
(7, 'Scoter vs Motorcycle', '<p>The most versatile bicycle is one with upright handlebars, slick (no huge knobs) medium-width tires, attachment points (braze-ons) for a rack and other accessories, and no shocks. This describes a popular segment of the bicycle market these days, &quot;urban bikes&quot;. My bike is like this, though back in the day it was purchased it was considered a mountain bike. Frame. It is important that a bike frame&#39;s geometry matches your body and your typical type of riding. Imagine a rubber frame: stretch the top if you have a long torso, shrink the bottom (make the wheels closer) if you want quick handling; stretch the bottom if you want a smoother, more stable ride for touring. If you are tall, and especially if your height is in your torso, there are several things you can do to make a bike fit without resorting to a custom frame. First, scoot your seat all the way back &ndash; but not so far back that your knee is not ___). Second, buy a longer stem; they come in sizes up to about 130 mm, though sometimes you can find a 140 mm or even 150 mm stem. Last, a narrow seat, straight (not angled back) bars, and raising the seat / lowering the bars can help increase the horizontal distance a bit more.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><img alt=\"\" src=\"https://striveme.com/img/gallery/YZF-R6.jpg\" style=\"height:800px; width:1200px\" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Most bike frames are aluminum now, not steel; occasionally exotic (expensive) materials like titanium and carbon fiber are used. Characteristics of each materials? ___ Folding frames with small 20&quot; wheels - travel bikes - are an interest of mine (particularly Bike Fridays or regular bikes sawed in half and joined again with S and S couplings [2]). I have never had the opportunity to try one, and I rarely travel, but they intrigue me because they can be stored in a regular Samsonite hard-sided suitcase (which turns into a trailer), a big ... ... middle of paper ... ...d water bottles. In general, I prefer plastic cages - they don&rsquo;t leave aluminum residue all over your bottles. Bell. An $8 Incredibell ding bell alerts pedestrians to your approach from the rear. Most people appreciate this. A Delta air horn will alert cars, or just irritate them; for the most part I don&rsquo;t bike around cars anymore anyway.</p>', '1614535589.jpg', 'Approved', 2, '2021-02-28 16:06:29', '2021-02-28 16:13:30'),
(14, 'motorcycle', '<p>Lorem,&nbsp;ipsum&nbsp;dolor&nbsp;sit&nbsp;amet&nbsp;consectetur&nbsp;adipisicing&nbsp;elit.&nbsp;Corporis&nbsp;nam&nbsp;asperiores&nbsp;beatae&nbsp;maiores&nbsp;dolorum&nbsp;error&nbsp;cum,&nbsp;ea&nbsp;suscipit&nbsp;aut&nbsp;ab&nbsp;sequi.&nbsp;Placeat&nbsp;nesciunt&nbsp;totam&nbsp;veritatis&nbsp;eaque&nbsp;quis&nbsp;illo!&nbsp;Vel,&nbsp;sint,&nbsp;temporibus&nbsp;tempora&nbsp;aperiam&nbsp;quae&nbsp;alias&nbsp;voluptas&nbsp;quia&nbsp;qui&nbsp;sed&nbsp;consectetur&nbsp;illo&nbsp;quidem&nbsp;voluptatum&nbsp;architecto&nbsp;eligendi!&nbsp;Eius&nbsp;molestias&nbsp;quo&nbsp;ea&nbsp;saepe&nbsp;odit&nbsp;temporibus&nbsp;quas&nbsp;voluptate&nbsp;amet&nbsp;officiis&nbsp;in&nbsp;itaque&nbsp;laboriosam,&nbsp;doloribus&nbsp;autem&nbsp;quod&nbsp;quidem&nbsp;porro&nbsp;sed&nbsp;quam&nbsp;veritatis.&nbsp;Placeat&nbsp;praesentium&nbsp;corporis&nbsp;ratione.&nbsp;Esse&nbsp;dignissimos&nbsp;error&nbsp;culpa&nbsp;aliquid&nbsp;officiis&nbsp;accusantium&nbsp;pariatur&nbsp;odit,&nbsp;dolore,&nbsp;officia&nbsp;voluptatem,&nbsp;fugiat&nbsp;omnis&nbsp;iure&nbsp;temporibus!&nbsp;Nostrum&nbsp;illum&nbsp;architecto&nbsp;ad&nbsp;magni&nbsp;repellat,&nbsp;ipsa&nbsp;quisquam&nbsp;quae&nbsp;nulla&nbsp;voluptatem&nbsp;asperiores&nbsp;nobis&nbsp;voluptates&nbsp;illo&nbsp;dicta&nbsp;itaque&nbsp;commodi&nbsp;tempora&nbsp;quas&nbsp;neque,&nbsp;hic&nbsp;temporibus&nbsp;sint&nbsp;placeat.&nbsp;Sunt&nbsp;est,&nbsp;vero&nbsp;dicta&nbsp;neque&nbsp;id&nbsp;natus&nbsp;rem&nbsp;amet&nbsp;perspiciatis&nbsp;atque&nbsp;veritatis&nbsp;consequuntur&nbsp;quos&nbsp;nostrum&nbsp;numquam&nbsp;fugiat&nbsp;ex&nbsp;cupiditate&nbsp;nesciunt&nbsp;iusto&nbsp;error&nbsp;vel&nbsp;perferendis&nbsp;libero&nbsp;ad?&nbsp;Nemo&nbsp;repellat&nbsp;libero,&nbsp;odit&nbsp;maxime&nbsp;recusandae&nbsp;nam?&nbsp;Quod&nbsp;architecto&nbsp;enim&nbsp;cum&nbsp;earum!&nbsp;Quos&nbsp;consectetur&nbsp;illum&nbsp;in&nbsp;perspiciatis&nbsp;voluptates&nbsp;saepe&nbsp;repellendus&nbsp;ducimus&nbsp;dolorem&nbsp;neque,&nbsp;earum&nbsp;porro&nbsp;officiis&nbsp;atque&nbsp;adipisci&nbsp;quisquam&nbsp;omnis&nbsp;odit&nbsp;fugit&nbsp;numquam&nbsp;quam&nbsp;nisi&nbsp;sed&nbsp;ratione&nbsp;quo&nbsp;sint.&nbsp;Placeat,&nbsp;dolores?&nbsp;Qui&nbsp;assumenda&nbsp;mollitia&nbsp;sit&nbsp;quaerat&nbsp;culpa&nbsp;nesciunt&nbsp;quasi&nbsp;suscipit&nbsp;rerum&nbsp;et&nbsp;cupiditate&nbsp;enim,&nbsp;accusamus&nbsp;distinctio&nbsp;soluta&nbsp;impedit&nbsp;voluptas,&nbsp;ea&nbsp;similique.&nbsp;Cumque.<br />\r\n&nbsp;</p>', '1614586278.jpg', 'Pending', 1, '2021-03-01 06:11:18', '2021-03-01 06:11:18'),
(15, 'Motorcycle', '<p>Lorem,&nbsp;ipsum&nbsp;dolor&nbsp;sit&nbsp;amet&nbsp;consectetur&nbsp;adipisicing&nbsp;elit.&nbsp;Corporis&nbsp;nam&nbsp;asperiores&nbsp;beatae&nbsp;maiores&nbsp;dolorum&nbsp;error&nbsp;cum,&nbsp;ea&nbsp;suscipit&nbsp;aut&nbsp;ab&nbsp;sequi.&nbsp;Placeat&nbsp;nesciunt&nbsp;totam&nbsp;veritatis&nbsp;eaque&nbsp;quis&nbsp;illo!&nbsp;Vel,&nbsp;sint,&nbsp;temporibus&nbsp;tempora&nbsp;aperiam&nbsp;quae&nbsp;alias&nbsp;voluptas&nbsp;quia&nbsp;qui&nbsp;sed&nbsp;consectetur&nbsp;illo&nbsp;quidem&nbsp;voluptatum&nbsp;architecto&nbsp;eligendi!&nbsp;Eius&nbsp;molestias&nbsp;quo&nbsp;ea&nbsp;saepe&nbsp;odit&nbsp;temporibus&nbsp;quas&nbsp;voluptate&nbsp;amet&nbsp;officiis&nbsp;in&nbsp;itaque&nbsp;laboriosam,&nbsp;doloribus&nbsp;autem&nbsp;quod&nbsp;quidem&nbsp;porro&nbsp;sed&nbsp;quam&nbsp;veritatis.&nbsp;Placeat&nbsp;praesentium&nbsp;corporis&nbsp;ratione.&nbsp;Esse&nbsp;dignissimos&nbsp;error&nbsp;culpa&nbsp;aliquid&nbsp;officiis&nbsp;accusantium&nbsp;pariatur&nbsp;odit,&nbsp;dolore,&nbsp;officia&nbsp;voluptatem,&nbsp;fugiat&nbsp;omnis&nbsp;iure&nbsp;temporibus!&nbsp;Nostrum&nbsp;illum&nbsp;architecto&nbsp;ad&nbsp;magni&nbsp;repellat,&nbsp;ipsa&nbsp;quisquam&nbsp;quae&nbsp;nulla&nbsp;voluptatem&nbsp;asperiores&nbsp;nobis&nbsp;voluptates&nbsp;illo&nbsp;dicta&nbsp;itaque&nbsp;commodi&nbsp;tempora&nbsp;quas&nbsp;neque,&nbsp;hic&nbsp;temporibus&nbsp;sint&nbsp;placeat.&nbsp;Sunt&nbsp;est,&nbsp;vero&nbsp;dicta&nbsp;neque&nbsp;id&nbsp;natus&nbsp;rem&nbsp;amet&nbsp;perspiciatis&nbsp;atque&nbsp;veritatis&nbsp;consequuntur&nbsp;quos&nbsp;nostrum&nbsp;numquam&nbsp;fugiat&nbsp;ex&nbsp;cupiditate&nbsp;nesciunt&nbsp;iusto&nbsp;error&nbsp;vel&nbsp;perferendis&nbsp;libero&nbsp;ad?&nbsp;Nemo&nbsp;repellat&nbsp;libero,&nbsp;odit&nbsp;maxime&nbsp;recusandae&nbsp;nam?&nbsp;Quod&nbsp;architecto&nbsp;enim&nbsp;cum&nbsp;earum!&nbsp;Quos&nbsp;consectetur&nbsp;illum&nbsp;in&nbsp;perspiciatis&nbsp;voluptates&nbsp;saepe&nbsp;repellendus&nbsp;ducimus&nbsp;dolorem&nbsp;neque,&nbsp;earum&nbsp;porro&nbsp;officiis&nbsp;atque&nbsp;adipisci&nbsp;quisquam&nbsp;omnis&nbsp;odit&nbsp;fugit&nbsp;numquam&nbsp;quam&nbsp;nisi&nbsp;sed&nbsp;ratione&nbsp;quo&nbsp;sint.&nbsp;Placeat,&nbsp;dolores?&nbsp;Qui&nbsp;assumenda&nbsp;mollitia&nbsp;sit&nbsp;quaerat&nbsp;culpa&nbsp;nesciunt&nbsp;quasi&nbsp;suscipit&nbsp;rerum&nbsp;et&nbsp;cupiditate&nbsp;enim,&nbsp;accusamus&nbsp;distinctio&nbsp;soluta&nbsp;impedit&nbsp;voluptas,&nbsp;ea&nbsp;similique.&nbsp;Cumque.<br />\r\n&nbsp;</p>', '1614598951.jpg', 'Approved', 6, '2021-03-01 09:42:31', '2021-03-01 09:43:45');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Motorcycles', '1614437884.jpg', '2021-02-27 12:58:04', '2021-02-27 12:58:04'),
(2, 'Bicycles', '1614438512.jpg', '2021-02-27 13:08:32', '2021-02-27 13:08:32'),
(3, 'Accessories', '1614439259.jpg', '2021-02-27 13:20:59', '2021-02-27 13:20:59');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `comment` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_id` bigint(20) NOT NULL,
  `blog_id` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `comment`, `customer_id`, `blog_id`, `created_at`, `updated_at`) VALUES
(1, 'This helped me understand the history of bicycles.', 3, 3, '2021-02-28 16:14:37', '2021-02-28 16:14:37'),
(2, 'That was an interesting topic thank you Exporso fan.', 4, 3, '2021-02-28 16:19:05', '2021-02-28 16:19:05'),
(3, 'History of bicycle WOW I gained a lot of information Thank you.', 5, 3, '2021-02-28 16:32:08', '2021-02-28 16:32:08'),
(8, 'Thank you.', 6, 3, '2021-03-01 09:42:04', '2021-03-01 09:42:04');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default.png',
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Add phone number',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `email`, `password`, `image`, `phone`, `created_at`, `updated_at`) VALUES
(1, 'b', 'b', 'b', 'default.png', '0777777777', '2021-02-01 11:17:20', '2021-02-28 17:46:17'),
(2, 'Exporso Fans', 'fans@exporso.com', '123456', '1614534181.png', 'Add phone number', '2021-02-28 15:42:31', '2021-02-28 15:43:01'),
(3, 'Ramzi Alqrainy', 'ramzi@gmail.com', '123456', '1614537357.jpg', 'Add phone number', '2021-02-28 16:08:57', '2021-02-28 16:36:15'),
(4, 'Rana Dababneh', 'rana@gmail.com', '123456', '1614536494.jpg', 'Add phone number', '2021-02-28 16:15:44', '2021-02-28 16:21:34'),
(5, 'Nicola Fanous', 'nicola@gmail.com', '123456', '1614536846.jpg', 'Add phone number', '2021-02-28 16:25:20', '2021-02-28 16:27:26'),
(6, 'Abdel rahman Abdaldeen', 'ceo@exporso.com', '123456', '1614544640.jpg', '07777777777', '2021-02-28 18:06:52', '2021-02-28 18:37:20');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2019_08_19_000000_create_failed_jobs_table', 1),
(3, '2021_02_24_085824_create_admins_table', 1),
(4, '2021_02_24_103608_create_categories_table', 1),
(5, '2021_02_24_103907_create_products_table', 1),
(6, '2021_02_24_104531_create_customers_table', 1),
(7, '2021_02_24_204420_create_orders_table', 1),
(8, '2021_02_24_204633_create_order_products_table', 1),
(9, '2021_02_25_181935_create_reviews_table', 1),
(10, '2021_02_27_104630_create_blogs_table', 1),
(11, '2021_02_27_105111_create_comments_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `customer_id` bigint(20) NOT NULL,
  `total_quantity` bigint(20) NOT NULL,
  `total_price` double(8,2) NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Processing',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `customer_id`, `total_quantity`, `total_price`, `address`, `status`, `created_at`, `updated_at`) VALUES
(6, 6, 5, 5752.00, 'Amman, Mecca St.', 'Processing', '2021-03-01 09:01:59', '2021-03-01 09:01:59'),
(7, 6, 4, 11040.00, 'Amman, Mecca St.', 'Processing', '2021-03-01 09:41:04', '2021-03-01 09:41:04');

-- --------------------------------------------------------

--
-- Table structure for table `order_products`
--

CREATE TABLE `order_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) NOT NULL,
  `order_id` bigint(20) NOT NULL,
  `quantity` double(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_products`
--

INSERT INTO `order_products` (`id`, `product_id`, `order_id`, `quantity`) VALUES
(1, 1, 1, 5.00),
(2, 1, 2, 3.00),
(3, 1, 3, 4.00),
(4, 1, 4, 5.00),
(5, 1, 5, 6.00),
(6, 7, 6, 2.00),
(7, 5, 6, 3.00),
(8, 1, 7, 4.00);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double(8,2) NOT NULL,
  `discount` double(8,2) NOT NULL DEFAULT 1.00,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `image`, `price`, `discount`, `description`, `category_id`, `created_at`, `updated_at`) VALUES
(1, 'Honda Hness CB350', '1614438065.png', 3000.00, 8.00, '2014 FELT Z3 CARBON SHIMANO ULTEGRA 6800 11 SPEED AXIS 2.0 ALLOY SIZE: 56CM', 1, '2021-02-27 13:00:18', '2021-02-27 13:01:05'),
(3, 'Honda Activa 6G', '1614438231.png', 2500.00, 0.00, 'high quality gas scooter VESPA motorcycle 125cc with good price for sale', 1, '2021-02-27 13:03:51', '2021-02-27 13:03:51'),
(5, 'Gasoline Scooter A9', '1614438426.png', 1800.00, 2.00, 'china gas scooter A9 with 125cc 150cc cheap price for sale', 1, '2021-02-27 13:07:06', '2021-02-27 13:07:06'),
(7, 'SWM Superdual-T 650', '1614438925.png', 250.00, 8.00, 'SWM Superdual-T is the top end tourer bike. It is powered by a single cylinder DOHC engine with 600cc of engine displacement. The 6-speed engine is liquid cooled along with a radiator and a fan. Like its adventurer sibling, it comes equipped with Mikuni E', 2, '2021-02-27 13:15:25', '2021-02-27 13:15:25'),
(8, 'Vintage Scrambler', '1614439202.png', 170.00, 25.00, 'This is the vintage scrambler design. It is powered by a single cylinder SOHC engine with 445.3cc engine displacement. The 5-speed transmission engine is oil/air cooled that produces up to 22KW power. Moreover, the instrument cluster is analog with digita', 2, '2021-02-27 13:20:02', '2021-02-27 13:20:02'),
(9, 'Bicycle accessories', '1614439434.png', 35.00, 0.00, 'Hot sales bicycle accessories colorful waterproof LED Bike Wheel Lights with AA Batteries led bicycle Spokewheel string light', 3, '2021-02-27 13:23:54', '2021-02-27 13:23:54'),
(10, 'CBR OEM S099', '1614439606.png', 240.00, 0.00, 'CBR OEM S099 Fitness Slip-on Sponge Pad Shockproof Anti Slip Bicycle Bike Cycling Racing Half Finger Sports Gloves Accessories', 3, '2021-02-27 13:26:46', '2021-02-27 13:26:46'),
(11, 'VICTGOAL', '1614440828.png', 50.00, 10.00, 'VICTGOAL Adult bike helmet urban commuting cycling helmet Men Bicycle Helmet LED Light', 3, '2021-02-27 13:27:22', '2021-02-27 13:47:08'),
(12, 'Bike Accessories', '1614439692.png', 25.00, 0.00, 'Bike Accessories Warning Bicycle Wheel Spoke Reflect Wheel Reflectors', 3, '2021-02-27 13:28:12', '2021-02-27 13:28:12'),
(13, 'Shoes', '1614439941.png', 50.00, 8.00, '2021 new fashion mens outdoor walking shoes', 3, '2021-02-27 13:32:21', '2021-02-27 13:32:21'),
(14, 'Bike Bells', '1614440748.png', 50.00, 3.00, 'Rear View Mirror Handlebar Bike Rear View Mirror Adjustable Anti-Shake / Damping Wide Range Back Sight Reflector Angle Cycling Bicycle motorcycle Bike Aluminum Alloy Stainless steel Black+Sliver Blue', 3, '2021-02-27 13:43:55', '2021-02-27 13:45:48'),
(15, 'VICTGOAL Bike', '1614442319.png', 40.00, 25.00, 'VICTGOAL Bike Helmet LED Backlight Bicycle Helmet Men Women Goggles Cycling Helmet Ultralight MTB Road Mountain Bike Helmets', 3, '2021-02-27 14:10:56', '2021-02-27 14:11:59');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) NOT NULL,
  `customer_id` bigint(20) NOT NULL,
  `comment` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rate` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `product_id`, `customer_id`, `comment`, `rate`, `created_at`, `updated_at`) VALUES
(1, 1, 3, 'I liked the blue color so much', 5, '2021-02-28 16:09:45', '2021-02-28 16:09:45'),
(2, 1, 4, 'I bought one for my son and it was so fast.', 4, '2021-02-28 16:17:54', '2021-02-28 16:17:54'),
(3, 1, 5, 'This too expensive can you make a discount for me.', 2, '2021-02-28 16:27:02', '2021-02-28 16:27:02'),
(7, 1, 1, 'This is good product', 3, '2021-03-01 06:08:24', '2021-03-01 06:08:24'),
(8, 1, 6, 'This is good product', 4, '2021-03-01 09:39:56', '2021-03-01 09:39:56');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_email_unique` (`email`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `customers_email_unique` (`email`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_products`
--
ALTER TABLE `order_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `order_products`
--
ALTER TABLE `order_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
