-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2021 at 10:25 PM
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
(1, 'admin', 'a', 'a', 'default.png', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `heading` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default.png',
  `customer_id` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `heading`, `body`, `image`, `customer_id`, `created_at`, `updated_at`) VALUES
(5, 'Froome racing to spoil Yates’s pink Giro dream', '<h2>Bike safety consultation shows someone in government might understand cycling.</h2>\r\n\r\n<p>Bicycles and life The bicycle was a truly exciting machine when it was first invented over a century ago; it was improved with every passing. A bike has many advantages- it is the most energy efficient form of transport on earth, it is healthy, non-polluting, economical and safe, but it&#39;s most unique, outstanding and enjoyable quality is that a bike is totally personal. The experience is unlike anything that you encounter while you are bicycling. Swooping around corners, the wind rushing</p>', '1614456406.jpg', 2, '2021-02-27 18:06:46', '2021-02-27 18:06:46'),
(6, 'Bicycles and Automobiles', '<p>Bicycles have been a form of transportation for hundreds of years now. Although many people choose to drive automobiles rather than riding bicycles, there is still a sizeable amount of people who prefer riding bicycles. In addition, Cyclists have always ridden their bicycles on the road next to automobiles. However, many people believe that cyclists should have separate laws, while, on the other hand; other people believe that cyclists deserve to have the same laws as car drivers. According to Grant Petersen, bike commuting is up to 61.6 percent in the last thirteen years, but since the national average is still less than two percent, it is hard to make a strong case for revamping the laws to accommodate the significant upsurge. In spite of this, I agree that the laws and infrastructure should be altered to recognize the differences between bicycles and automobiles because it will improve the safety of cyclists, as well as vehicle drivers, and create a more diverse population inside our cities.</p>', '1614456455.jpg', 2, '2021-02-27 18:07:35', '2021-02-27 18:07:35'),
(7, 'History of the bicycle', '<p>Biking today has risen to be a very good form of exercise but it is more than that people race both mountain bikes and road bikes around the world. Bikes have been included in both of the world wars and made a cheaper way for soldiers to travel farther distances than having to ride a horse. Bikes that could be rode without your feet touch the ground have been around since the 1860s. Since then great advancements have been made to them including easily adjustable gears and lighter materials to build them with such as aluminum, carbon fiber, and titanium. These are all things that make the bike a great revolutionary form of getting around with quickness and ease.<br />\r\nThe design of a bike originated from a device called the Draisienne. It was made in 1817 by Baron von Drais. He made this machine so he could get around his gardens faster. The machine was made completely of wood and had a bar that ran between two wheels. He would straddle the bar and push off the ground in order to move. The front-wheel was steerable so he could maneuver around the gardens.&nbsp;</p>', '1614456507.jpg', 2, '2021-02-27 18:08:27', '2021-02-27 18:08:27'),
(8, 'Bicycle Critique', '<p>&nbsp;</p>\r\n\r\n<p>The most versatile bicycle is one with upright handlebars, slick (no huge knobs) medium-width tires, attachment points (braze-ons) for a rack and other accessories, and no shocks. This describes a popular segment of the bicycle market these days, &quot;urban bikes&quot;. My bike is like this, though back in the day it was purchased it was considered a mountain bike. Frame. It is important that a bike frame&#39;s geometry matches your body and your typical type of riding. Imagine a rubber frame: stretch the top if you have a long torso, shrink the bottom (make the wheels closer) if you want quick handling; stretch the bottom if you want a smoother, more stable ride for touring.</p>', '1614456558.jpg', 2, '2021-02-27 18:09:18', '2021-02-27 18:09:18'),
(9, 'Cycling As A Bicycle', '<p>Cycling is a low-cost, effective mode of transportation that is quiet, energy efficient, versatile, provides physical activity, produces no pollution, reduces greenhouse gas emission, helps improve climate change, improves air quality and overall traffic management, supports sustainable development, provides convenient transport, offers alternatives to driving on congested roadways, supports social interaction and can be fun. As a vehicle, a bike consumes no fossil fuels and produces no greenhouse emissions, whilst providing an alternative to private automobile in ensuring mobility of people and light goods.<br />\r\n<br />\r\nBicycles are efficient in their use of public space and supporting healthy lifestyles, making communities better place to live. Additionally, they are cheap to acquire and maintain, and are dependable. Bikes are flexible vehicles that can operate in a wide variety of settings and environments. Like every <a href=\"https://www.123helpme.com/topics/mode-of-transport\">mode of transport</a>, the <a href=\"https://www.123helpme.com/topics/bicycle\">bicycle</a> has a specific role to play based on its capacities and operating characteristics. Bicycles are consistently regarded as a viable alternative to the automobile for short personal trips and are an important component of the transportation systems of many cities and communities around the world.</p>', '1614456589.jpg', 2, '2021-02-27 18:09:49', '2021-02-27 18:09:49'),
(10, 'Bicycle Pump', '<p>Top 10 Bicycle Tire Pump in 2018<br />\r\nIf there is one thing that you should never do when cycling is to leave your home without a bicycle tire pump. Imagine having a flat tire, and you do not have a bicycle pump and repair kit on hand. You will be hauling a heavy load home as pushing the bike is not easy.<br />\r\nThe fantastic thing is a bike pump is a handy device you can use to pump up more than just a flat tire. You can even use it to inflate from a soccer ball to basketball. The handy tool is a necessity to carry around with you anywhere.<br />\r\nIf you are ready to buy a <a href=\"https://www.123helpme.com/topics/bicycle\">bicycle</a> tire pump, look at our 2018-reviewed list here and find one suitable to fit in with your budget. You will not be disappointed and will thank us in the end.<br />\r\nBest Bike Tire Pump<br />\r\n10. Poshei<em>&hellip;show more content&hellip;</em><br />\r\nCanway Bike Pump<br />\r\nWho wants to haul around a massive bicycle tire pump while cycling? We are sure of it that you want a lightweight and portable bicycle pump to carry. Here we have the Canway with a lightweight and compact design with twin valves to solve any flat tire problem. The tool offers you a 160psi for pumping up road and mountain bike tires.<br />\r\n&nbsp;</p>', '1614456647.jpg', 2, '2021-02-27 18:10:47', '2021-02-27 18:10:47');

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
(1, '123', 'j', 'j', 'default.png', '0777777777', '2021-02-27 13:55:39', '2021-02-27 13:56:44'),
(2, 'mohammed', 'b', 'b', 'default.png', 'Add phone number', '2021-02-27 17:56:03', '2021-02-27 17:56:03');

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
(1, 1, 1, 276.00, 'jjjj', 'Shiping', '2021-02-27 13:56:44', '2021-02-27 16:23:01');

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
(1, 1, 1, 1.00);

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
(1, 1, 1, 'wooow', NULL, '2021-02-27 13:56:01', '2021-02-27 13:56:01');

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `order_products`
--
ALTER TABLE `order_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
