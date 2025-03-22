-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 21 مارس 2025 الساعة 08:47
-- إصدار الخادم: 10.11.10-MariaDB-log
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u274988421_bta`
--

-- --------------------------------------------------------

--
-- بنية الجدول `absences`
--

CREATE TABLE `absences` (
  `id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `absence_date` date NOT NULL,
  `periods` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- إرجاع أو استيراد بيانات الجدول `absences`
--

INSERT INTO `absences` (`id`, `student_id`, `absence_date`, `periods`, `created_at`) VALUES
(3, 1, '2025-02-14', '1', '2025-02-14 00:04:57'),
(4, 1, '2025-02-19', '1,2', '2025-02-14 23:36:21'),
(5, 2, '2025-02-18', '1,2', '2025-02-16 18:51:50'),
(6, 1, '2025-02-21', '1,2', '2025-02-20 16:14:27'),
(7, 1, '2025-03-26', '1,2', '2025-03-20 20:47:19');

-- --------------------------------------------------------

--
-- بنية الجدول `countries`
--

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `country_name` varchar(100) NOT NULL,
  `country_code` varchar(3) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- إرجاع أو استيراد بيانات الجدول `countries`
--

INSERT INTO `countries` (`id`, `country_name`, `country_code`, `created_at`) VALUES
(1, 'الاردن', 'jo', '2025-02-07 22:25:20'),
(2, 'سوريا', 'sa', '2025-02-07 22:25:20'),
(3, 'الكويت', 'kw', '2025-02-07 22:25:20');

-- --------------------------------------------------------

--
-- بنية الجدول `drivers`
--

CREATE TABLE `drivers` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `vehicle_type` varchar(50) NOT NULL,
  `vehicle_number` varchar(20) NOT NULL,
  `vehicle_color` varchar(30) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- إرجاع أو استيراد بيانات الجدول `drivers`
--

INSERT INTO `drivers` (`id`, `user_id`, `phone_number`, `vehicle_type`, `vehicle_number`, `vehicle_color`, `created_at`) VALUES
(1, 2, '+962786752056', 'toyota', '42-5678', 'red', '2025-02-09 23:59:00');

-- --------------------------------------------------------

--
-- بنية الجدول `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `trip_id` int(11) DEFAULT NULL,
  `is_read` tinyint(1) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- إرجاع أو استيراد بيانات الجدول `notifications`
--

INSERT INTO `notifications` (`id`, `user_id`, `title`, `body`, `trip_id`, `is_read`, `created_at`) VALUES
(1, 1, 'بدء الرحلة', 'تم بدء رحلة رحلة المدرسة الصباحية - حي النزهة', 5, 0, '2025-02-14 09:24:09'),
(2, 1, 'بدء الرحلة', 'تم بدء رحلة رحلة المدرسة الصباحية - حي النزهة', 5, 0, '2025-02-14 09:24:09'),
(3, 1, 'انتهاء الرحلة', 'تم إنهاء رحلة رحلة المدرسة الصباحية - حي النزهة', 5, 0, '2025-02-14 09:24:42'),
(4, 1, 'انتهاء الرحلة', 'تم إنهاء رحلة رحلة المدرسة الصباحية - حي النزهة', 5, 0, '2025-02-14 09:24:42'),
(5, 1, 'انتهاء الرحلة', 'تم إنهاء رحلة رحلة المدرسة الصباحية - حي النزهة', 5, 0, '2025-02-14 11:44:25'),
(6, 1, 'انتهاء الرحلة', 'تم إنهاء رحلة رحلة المدرسة الصباحية - حي النزهة', 5, 0, '2025-02-14 11:44:25'),
(7, 1, 'بدء الرحلة', 'تم بدء رحلة رحلة المدرسة الصباحية - حي النزهة', 5, 0, '2025-02-14 11:44:57'),
(8, 1, 'بدء الرحلة', 'تم بدء رحلة رحلة المدرسة الصباحية - حي النزهة', 5, 0, '2025-02-14 11:44:57'),
(9, 1, 'انتهاء الرحلة', 'تم إنهاء رحلة رحلة المدرسة الصباحية - حي الروضة', 7, 0, '2025-02-14 11:45:25'),
(10, 1, 'انتهاء الرحلة', 'تم إنهاء رحلة رحلة المدرسة الصباحية - حي النزهة', 5, 0, '2025-02-14 11:45:35'),
(11, 1, 'انتهاء الرحلة', 'تم إنهاء رحلة رحلة المدرسة الصباحية - حي النزهة', 5, 0, '2025-02-14 11:45:35'),
(12, 1, 'بدء الرحلة', 'تم بدء رحلة رحلة المدرسة الصباحية - حي الروضة', 7, 0, '2025-02-14 11:49:21'),
(13, 1, 'بدء الرحلة', 'تم بدء رحلة رحلة المدرسة الصباحية - حي النزهة', 5, 0, '2025-02-14 11:49:31'),
(14, 1, 'بدء الرحلة', 'تم بدء رحلة رحلة المدرسة الصباحية - حي النزهة', 5, 0, '2025-02-14 11:49:31'),
(15, 1, 'انتهاء الرحلة', 'تم إنهاء رحلة رحلة المدرسة الصباحية - حي الروضة', 7, 0, '2025-02-14 11:55:09'),
(16, 1, 'انتهاء الرحلة', 'تم إنهاء رحلة رحلة المدرسة الصباحية - حي النزهة', 5, 0, '2025-02-14 11:55:18'),
(17, 1, 'انتهاء الرحلة', 'تم إنهاء رحلة رحلة المدرسة الصباحية - حي النزهة', 5, 0, '2025-02-14 11:55:18'),
(18, 1, 'بدء الرحلة', 'تم بدء رحلة رحلة المدرسة الصباحية - حي الروضة', 7, 0, '2025-02-14 12:00:03'),
(19, 1, 'انتهاء الرحلة', 'تم إنهاء رحلة رحلة المدرسة الصباحية - حي الروضة', 7, 0, '2025-02-14 12:00:16'),
(20, 1, 'بدء الرحلة', 'تم بدء رحلة رحلة المدرسة الصباحية - حي الروضة', 7, 0, '2025-02-14 12:00:40'),
(21, 1, 'انتهاء الرحلة', 'تم إنهاء رحلة رحلة المدرسة الصباحية - حي الروضة', 7, 0, '2025-02-14 12:19:41'),
(22, 1, 'بدء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم بدء الرحلة وسيتم نقل الطلاب', 5, 0, '2025-02-15 16:57:57'),
(23, 1, 'بدء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم بدء الرحلة وسيتم نقل الطلاب', 5, 0, '2025-02-15 16:57:57'),
(24, 1, 'انتهاء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم إنهاء الرحلة ووصول الطلاب', 5, 0, '2025-02-15 16:59:39'),
(25, 1, 'بدء رحلة رحلة المدرسة الصباحية - حي الروضة', 'تم بدء الرحلة وسيتم أخذ الطلاب', 7, 0, '2025-02-15 16:59:54'),
(26, 1, 'بدء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم بدء الرحلة وسيتم أخذ الطلاب', 5, 0, '2025-02-15 17:00:03'),
(27, 1, 'انتهاء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم إنهاء الرحلة ووصول الطلاب', 5, 0, '2025-02-15 18:48:26'),
(28, 1, 'بدء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم بدء الرحلة وسيتم أخذ الطلاب', 5, 0, '2025-02-16 18:53:34'),
(29, 1, 'انتهاء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم إنهاء الرحلة ووصول الطلاب', 5, 0, '2025-02-16 18:53:44'),
(30, 1, 'بدء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم بدء الرحلة وسيتم أخذ الطلاب', 5, 0, '2025-02-16 20:47:03'),
(31, 1, 'انتهاء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم إنهاء الرحلة ووصول الطلاب', 5, 0, '2025-02-16 21:12:12'),
(32, 1, 'انتهاء رحلة رحلة المدرسة الصباحية - حي الروضة', 'تم إنهاء الرحلة ووصول الطلاب', 7, 0, '2025-02-16 21:12:19'),
(33, 1, 'بدء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم بدء الرحلة وسيتم أخذ الطلاب', 5, 0, '2025-02-16 21:12:43'),
(34, 1, 'انتهاء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم إنهاء الرحلة ووصول الطلاب', 5, 0, '2025-02-16 21:12:49'),
(35, 1, 'بدء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم بدء الرحلة وسيتم أخذ الطلاب', 5, 0, '2025-02-19 00:48:30'),
(36, 1, 'انتهاء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم إنهاء الرحلة ووصول الطلاب', 5, 0, '2025-02-19 00:57:13'),
(37, 1, 'بدء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم بدء الرحلة وسيتم أخذ الطلاب', 5, 0, '2025-02-19 00:57:19'),
(38, 1, 'بدء رحلة رحلة المدرسة الصباحية - حي الروضة', 'تم بدء الرحلة وسيتم أخذ الطلاب', 7, 0, '2025-02-19 01:37:14'),
(39, 1, 'انتهاء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم إنهاء الرحلة ووصول الطلاب', 5, 0, '2025-02-19 01:59:35'),
(40, 1, 'انتهاء رحلة رحلة المدرسة الصباحية - حي الروضة', 'تم إنهاء الرحلة ووصول الطلاب', 7, 0, '2025-02-19 01:59:38'),
(41, 1, 'بدء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم بدء الرحلة وسيتم أخذ الطلاب', 5, 0, '2025-02-19 02:00:35'),
(42, 1, 'انتهاء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم إنهاء الرحلة ووصول الطلاب', 5, 0, '2025-02-20 16:15:56'),
(43, 1, 'بدء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم بدء الرحلة وسيتم أخذ الطلاب', 5, 0, '2025-02-20 16:16:08'),
(44, 1, 'انتهاء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم إنهاء الرحلة ووصول الطلاب', 5, 0, '2025-02-20 16:21:08'),
(45, 1, 'انتهاء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم إنهاء الرحلة ووصول الطلاب', 5, 0, '2025-02-20 16:21:08'),
(46, 1, 'انتهاء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم إنهاء الرحلة ووصول الطلاب', 5, 0, '2025-02-20 16:21:09'),
(47, 1, 'بدء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم بدء الرحلة وسيتم أخذ الطلاب', 5, 0, '2025-03-20 22:46:41'),
(48, 1, 'انتهاء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم إنهاء الرحلة ووصول الطلاب', 5, 0, '2025-03-20 22:46:52'),
(49, 1, 'بدء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم بدء الرحلة وسيتم أخذ الطلاب', 5, 0, '2025-03-20 22:47:08'),
(50, 1, 'انتهاء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم إنهاء الرحلة ووصول الطلاب', 5, 0, '2025-03-20 22:48:57'),
(51, 1, 'بدء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم بدء الرحلة وسيتم أخذ الطلاب', 5, 0, '2025-03-20 23:55:41'),
(52, 1, 'انتهاء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم إنهاء الرحلة ووصول الطلاب', 5, 0, '2025-03-21 00:01:59'),
(53, 1, 'بدء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم بدء الرحلة وسيتم أخذ الطلاب', 5, 0, '2025-03-21 00:21:32'),
(54, 1, 'انتهاء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم إنهاء الرحلة ووصول الطلاب', 5, 0, '2025-03-21 00:21:40'),
(55, 1, 'بدء رحلة رحلة المدرسة الصباحية - حي الروضة', 'تم بدء الرحلة وسيتم أخذ الطلاب', 7, 0, '2025-03-21 00:21:44'),
(56, 1, 'انتهاء رحلة رحلة المدرسة الصباحية - حي الروضة', 'تم إنهاء الرحلة ووصول الطلاب', 7, 0, '2025-03-21 00:21:48'),
(57, 1, 'بدء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم بدء الرحلة وسيتم أخذ الطلاب', 5, 0, '2025-03-21 00:27:33'),
(58, 1, 'انتهاء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم إنهاء الرحلة ووصول الطلاب', 5, 0, '2025-03-21 00:28:31'),
(59, 1, 'بدء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم بدء الرحلة وسيتم أخذ الطلاب', 5, 0, '2025-03-21 00:28:33'),
(60, 1, 'انتهاء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم إنهاء الرحلة ووصول الطلاب', 5, 0, '2025-03-21 00:47:19'),
(61, 1, 'بدء رحلة رحلة المدرسة الصباحية - حي النزهة', 'تم بدء الرحلة وسيتم أخذ الطلاب', 5, 0, '2025-03-21 00:47:32');

-- --------------------------------------------------------

--
-- بنية الجدول `parents`
--

CREATE TABLE `parents` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `parent_name` varchar(100) NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `latitude` decimal(10,8) DEFAULT NULL,
  `longitude` decimal(11,8) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `schoolToken` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- إرجاع أو استيراد بيانات الجدول `parents`
--

INSERT INTO `parents` (`id`, `user_id`, `parent_name`, `phone_number`, `latitude`, `longitude`, `created_at`, `updated_at`, `schoolToken`) VALUES
(1, 1, 'مختار الفالوجي', '9627971198', 39.42238289, 29.98776801, '2025-02-13 23:03:54', '2025-02-20 16:13:41', ''),
(2, 2, 'محمود البتك', '+98777777', NULL, NULL, '2025-02-13 23:03:54', '2025-02-13 23:03:54', '');

-- --------------------------------------------------------

--
-- بنية الجدول `schools`
--

CREATE TABLE `schools` (
  `id` int(11) NOT NULL,
  `school_name` varchar(255) NOT NULL,
  `logo_url` varchar(255) DEFAULT NULL,
  `country_id` int(11) NOT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `tokenSchool` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- إرجاع أو استيراد بيانات الجدول `schools`
--

INSERT INTO `schools` (`id`, `school_name`, `logo_url`, `country_id`, `is_active`, `created_at`, `updated_at`, `tokenSchool`) VALUES
(1, 'الفرقان / الاردن', 'https://crm.zoudne.com//image/logo.png', 1, 1, '2025-02-07 23:32:58', '2025-02-07 23:44:24', '123'),
(2, 'الامل', 'https://crm.zoudne.com//image/logo.png', 2, 1, '2025-02-07 23:32:58', '2025-02-07 23:44:29', '456'),
(3, 'الامل2', 'https://crm.zoudne.com//image/logo.png', 2, 1, '2025-02-07 23:32:58', '2025-02-07 23:44:33', '789'),
(4, 'الفرقان / الاردن2', 'https://crm.zoudne.com//image/logo.png', 1, 1, '2025-02-07 23:32:58', '2025-02-07 23:44:38', '098');

-- --------------------------------------------------------

--
-- بنية الجدول `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `student_name` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- إرجاع أو استيراد بيانات الجدول `students`
--

INSERT INTO `students` (`id`, `student_name`, `user_id`, `created_at`) VALUES
(1, 'احمد احمد', 1, '2025-02-08 06:06:30'),
(2, 'محمد محمد', 1, '2025-02-08 06:06:30'),
(3, 'مها المصري', 2, '2025-02-08 06:06:55');

-- --------------------------------------------------------

--
-- بنية الجدول `trips`
--

CREATE TABLE `trips` (
  `id` int(11) NOT NULL,
  `trip_name` varchar(100) NOT NULL,
  `trip_type` enum('morning','evening') NOT NULL,
  `driver_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `status` enum('start','end') DEFAULT 'end',
  `driver_latitude` decimal(10,8) DEFAULT NULL,
  `driver_longitude` decimal(11,8) DEFAULT NULL,
  `last_location_update` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- إرجاع أو استيراد بيانات الجدول `trips`
--

INSERT INTO `trips` (`id`, `trip_name`, `trip_type`, `driver_id`, `created_at`, `status`, `driver_latitude`, `driver_longitude`, `last_location_update`) VALUES
(5, 'رحلة المدرسة الصباحية - حي النزهة', 'evening', 2, '2025-02-08 07:09:16', 'start', NULL, NULL, '2025-03-21 00:47:32'),
(6, 'رحلة المدرسة المسائية - حي النزهة', 'evening', 3, '2025-02-08 07:09:16', 'start', NULL, NULL, '2025-02-14 20:04:29'),
(7, 'رحلة المدرسة الصباحية - حي الروضة', 'morning', 2, '2025-02-08 07:09:16', 'end', NULL, NULL, '2025-03-21 00:21:48'),
(8, 'رحلة المدرسة المسائية - حي الروضة', 'evening', 1, '2025-02-08 07:09:16', 'start', NULL, NULL, '2025-02-14 20:04:29'),
(9, 'رحلة المدرسة الصباحية - حي النزهة', 'morning', 1, '2025-02-08 07:13:30', 'end', NULL, NULL, '2025-02-14 20:04:29'),
(10, 'رحلة المدرسة المسائية - حي النزهة', 'evening', 1, '2025-02-08 07:13:30', 'end', NULL, NULL, '2025-02-14 20:04:29'),
(11, 'رحلة المدرسة الصباحية - حي الروضة', 'morning', 1, '2025-02-08 07:13:30', 'end', NULL, NULL, '2025-02-14 20:04:29'),
(12, 'رحلة المدرسة المسائية - حي الروضة', 'evening', 1, '2025-02-08 07:13:30', 'end', NULL, NULL, '2025-02-14 20:04:29'),
(13, 'رحلة المدرسة الصباحية - حي النزهة', 'morning', 1, '2025-02-08 07:13:52', 'end', NULL, NULL, '2025-02-14 20:04:29'),
(14, 'رحلة المدرسة المسائية - حي النزهة', 'evening', 1, '2025-02-08 07:13:52', 'end', NULL, NULL, '2025-02-14 20:04:29'),
(15, 'رحلة المدرسة الصباحية - حي الروضة', 'morning', 1, '2025-02-08 07:13:52', 'end', NULL, NULL, '2025-02-14 20:04:29'),
(16, 'رحلة المدرسة المسائية - حي الروضة', 'evening', 1, '2025-02-08 07:13:52', 'end', NULL, NULL, '2025-02-14 20:04:29');

-- --------------------------------------------------------

--
-- بنية الجدول `trip_students`
--

CREATE TABLE `trip_students` (
  `id` int(11) NOT NULL,
  `trip_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `latitude` decimal(10,8) DEFAULT NULL,
  `longitude` decimal(11,8) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- إرجاع أو استيراد بيانات الجدول `trip_students`
--

INSERT INTO `trip_students` (`id`, `trip_id`, `student_id`, `latitude`, `longitude`, `created_at`) VALUES
(14, 7, 1, 24.71360000, 46.67530000, '2025-02-08 07:13:52'),
(15, 5, 1, 24.72350000, 46.68510000, '2025-02-08 07:13:52'),
(16, 5, 2, 24.73340000, 46.69520000, '2025-02-08 07:13:52');

-- --------------------------------------------------------

--
-- بنية الجدول `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `school_token` varchar(100) DEFAULT NULL,
  `auth_token` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_type` enum('parent','driver') NOT NULL DEFAULT 'parent'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- إرجاع أو استيراد بيانات الجدول `users`
--

INSERT INTO `users` (`id`, `phone_number`, `password`, `school_token`, `auth_token`, `created_at`, `updated_at`, `user_type`) VALUES
(1, '1', '1', '123', 'fz6cz5', '2025-02-08 00:05:42', '2025-03-20 23:58:44', 'parent'),
(2, '2', '2', '123', 'u6xlmj', '2025-02-08 00:10:49', '2025-03-20 23:35:41', 'driver'),
(3, '3', '3', '444', 'dfhdf', '2025-02-08 00:10:49', '2025-02-09 22:19:16', 'driver');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `absences`
--
ALTER TABLE `absences`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `drivers`
--
ALTER TABLE `drivers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `trip_id` (`trip_id`);

--
-- Indexes for table `parents`
--
ALTER TABLE `parents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `schools`
--
ALTER TABLE `schools`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `trips`
--
ALTER TABLE `trips`
  ADD PRIMARY KEY (`id`),
  ADD KEY `driver_id` (`driver_id`);

--
-- Indexes for table `trip_students`
--
ALTER TABLE `trip_students`
  ADD PRIMARY KEY (`id`),
  ADD KEY `trip_id` (`trip_id`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phone_number` (`phone_number`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `absences`
--
ALTER TABLE `absences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `drivers`
--
ALTER TABLE `drivers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `parents`
--
ALTER TABLE `parents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `schools`
--
ALTER TABLE `schools`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `trips`
--
ALTER TABLE `trips`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `trip_students`
--
ALTER TABLE `trip_students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- قيود الجداول المُلقاة.
--

--
-- قيود الجداول `absences`
--
ALTER TABLE `absences`
  ADD CONSTRAINT `absences_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`);

--
-- قيود الجداول `drivers`
--
ALTER TABLE `drivers`
  ADD CONSTRAINT `drivers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- قيود الجداول `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `notifications_ibfk_2` FOREIGN KEY (`trip_id`) REFERENCES `trips` (`id`);

--
-- قيود الجداول `parents`
--
ALTER TABLE `parents`
  ADD CONSTRAINT `parents_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- قيود الجداول `schools`
--
ALTER TABLE `schools`
  ADD CONSTRAINT `schools_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`);

--
-- قيود الجداول `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- قيود الجداول `trips`
--
ALTER TABLE `trips`
  ADD CONSTRAINT `trips_ibfk_1` FOREIGN KEY (`driver_id`) REFERENCES `users` (`id`);

--
-- قيود الجداول `trip_students`
--
ALTER TABLE `trip_students`
  ADD CONSTRAINT `trip_students_ibfk_1` FOREIGN KEY (`trip_id`) REFERENCES `trips` (`id`),
  ADD CONSTRAINT `trip_students_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
