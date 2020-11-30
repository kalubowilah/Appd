-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2020 at 09:56 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `csth`
--

-- --------------------------------------------------------

--
-- Table structure for table `patient_details`
--

CREATE TABLE `patient_details` (
  `id` int(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `age` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `sex` varchar(50) NOT NULL,
  `allergies` varchar(50) NOT NULL,
  `bht` varchar(50) NOT NULL,
  `ward` varchar(50) NOT NULL,
  `doctor` varchar(100) NOT NULL,
  `theater` varchar(11) NOT NULL,
  `time` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  `date` varchar(50) NOT NULL,
  `note` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` varchar(191) NOT NULL DEFAULT 'PENDING',
  `created_by` varchar(191) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patient_details`
--

INSERT INTO `patient_details` (`id`, `name`, `age`, `address`, `sex`, `allergies`, `bht`, `ward`, `doctor`, `theater`, `time`, `type`, `date`, `note`, `created_at`, `status`, `created_by`, `updated_at`) VALUES
(4, 'aaaas', 'aaa', 'aaaaaaaaaaaaaaa\n\n\n\n', 'Female', 'Does not cause allergies', '', 'aa', 'a', '', 'aa', 'aa', 'asas', '', '2020-11-21 17:54:02', 'PROBLEM', 'ass', '2020-11-30 07:55:15'),
(5, 'aaaas', 'aaa', 'aaaaaaaaaaaaaaa\n\n\n\n', 'Female', 'Does not cause allergies', '', 'aa', 'a', '', 'aa', 'aa', 'asas', '', '2020-11-21 17:54:02', 'PERMITTED', 'adsdfdsf', '2020-11-30 07:55:15'),
(6, '', '', '', '', '', 'aa', '', '', 'ot2', '', '', '', '', '2020-11-21 17:54:02', 'PERMITTED', NULL, '2020-11-30 07:55:15'),
(14, 'ddd', '34', 'dd', 'Female', 'Does not cause allergies', '44', '34', 'dd', 'B', 'ff', 'rt', '2020-11-25', 'ffff\n', '2020-11-25 18:43:44', '', NULL, '2020-11-30 07:55:15'),
(15, 'dd', '', '', 'Male', 'Allergies', '234', '34', 'dd', 'Main', '23', 'gg', '2020-11-17', 'ffff\n', '2020-11-25 18:45:41', 'PERMITTED', NULL, '2020-11-30 07:55:15'),
(16, 'hg', 'asasas', '001', '1324353v', 'dd', 'ee', 'sfsf', 'sfsdf', 'sdfsf', 'dgfg', 'dfd', 'fdf', 'sfsfsf', '2020-11-27 11:15:44', '', 'hg', '2020-11-30 07:55:15'),
(17, '12', 'dadd', 'sfdd', 'Female', 'Allergies', 'sdsd', 'sdsdsdsd', 'sd', 'A', 'sdsd', 'ssdsd', '2020-11-27', 'sdsdsd\n', '2020-11-27 11:18:38', 'PROBLEM', 'hg', '0000-00-00 00:00:00'),
(18, 'hg', 'dadd', 'sf\r\ns', 'Female', 'Allergies', 'sdsd', 'sdsdsdsd', 'sd', 'A', 'sdsd', 'ssdsd', '', 'sdsdsd\r\n', '2020-11-27 11:18:38', 'READY', 'hg', '2020-11-30 07:55:15'),
(19, 'hg', '12', 'Yy', 'Male', 'Does not cause allergies', 'Gg', 'Uu', 'Tt', 'A', '12', 'Tt', '', 'Ee', '2020-11-28 16:50:36', 'PENDING', 'hg', '2020-11-30 07:55:15'),
(20, 'hg', 'Tt', 'Yy', 'Female', 'Allergies', 'Ee', 'Yy', 'Tt', 'A', 'Yy', 'Yy', '', 'Yy', '2020-11-28 17:12:18', 'PENDING', 'hg', '2020-11-30 07:55:15'),
(21, 'hgaaaaaaaas', 'daddasas ass', 'sf\nssssssss\n\n', '', 'Does not cause allergies', '', '', '', '', '', '', '', '', '2020-11-29 07:58:10', 'PENDING', '', '2020-11-30 07:55:15'),
(22, 'hgaaaaaaaas', 'daddasas ass', 'sf\nssssssss\n\n', '', 'Does not cause allergies', '', '', '', '', '', '', '', '', '2020-11-29 07:58:10', 'PENDING', '', '2020-11-30 07:55:15'),
(23, 'hgaa', '', '', '', '', '', '', '', '', '', '', '', '', '2020-11-29 08:00:41', 'PENDING', '', '2020-11-30 07:55:15'),
(24, 'hg', '1212', 'add\n', 'Male', 'Allergies', 'aasas', 'assa', 'asas', 'A', 'aaa', 'aaa', '', 'aaa\n', '2020-11-29 08:06:28', 'PENDING', 'hg', '2020-11-30 07:55:15'),
(25, 'hgaa', '', '', 'Male', 'Does not cause allergies', '', '', '', 'B', '', '', '', '', '2020-11-29 08:09:25', 'PENDING', '', '2020-11-30 07:55:15'),
(26, 'ccccccccccccccccccccccccccccccc', '', '', 'Male', 'Does not cause allergies', '', '', '', 'B', '', '', '', '', '2020-11-29 08:10:31', 'PENDING', '', '2020-11-30 07:55:15'),
(27, 'ccccccccccccccccccccccccccccccc', '', '', 'Male', 'Does not cause allergies', '', '', '', 'B', '', '', '', '', '2020-11-29 08:12:08', 'PENDING', '', '2020-11-30 07:55:15'),
(28, 'ccccccccccccccccccccccccccccccc', '', '', 'Male', 'Does not cause allergies', '', '', '', 'B', '', '', '', '', '2020-11-29 08:12:29', 'PENDING', '', '2020-11-30 07:55:15'),
(29, '111', '', '', '', '', '', '', '', '', '', '', '', '', '2020-11-30 07:07:14', 'PENDING', '', '2020-11-30 07:55:15'),
(30, '111', '', '', '', '', '', '', '', '', '', '', '', '', '2020-11-30 07:22:36', 'PENDING', '', '2020-11-30 07:55:15'),
(31, '111', '', '', '', '', '', '', '', '', '', '', '', '', '2020-11-30 07:22:39', 'PENDING', '', '2020-11-30 07:55:15'),
(32, '111', 'dadd', '', '', '', '', '', '', '', '', '', '', '', '2020-11-30 07:33:26', 'PENDING', '', '2020-11-30 07:55:15'),
(33, 'aa', 'fgfgfgfg', 'gfg\n', 'Male', 'Allergies', 'dffgf', 'jhjh', 'dff', 'A', 'fgg', 'ghg', '2020-11-30', 'g\n', '2020-11-30 08:21:08', 'PENDING', 'hg', '2020-11-30 08:52:50');

-- --------------------------------------------------------

--
-- Table structure for table `user_reg`
--

CREATE TABLE `user_reg` (
  `id` int(11) NOT NULL,
  `position` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `reg_number` varchar(50) NOT NULL,
  `nic` varchar(100) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_reg`
--

INSERT INTO `user_reg` (`id`, `position`, `name`, `reg_number`, `nic`, `phone`, `email`, `password`) VALUES
(99, 'Medical Officer', 'hg', '564', '789654123789', '0147896325', 'gg@gmail.com', '123'),
(100, 'Director', 'jhg', '1234', '098765432123', '0987654321', 'dd@gmail.com', '123'),
(101, 'Anesthesiologist Doctor', 'hhhhhh', '2345', '852369741258', '0123654789', 'hh@gmail.com', '123'),
(102, 'Surgery Doctor', 'hgj', 'asd', '789654123654', '0123748596', 'aa@gmail.com', '123'),
(103, 'Nursing Staff', 'hgf', '543', '856932147801', '0569874231', 'nn@gmail.com', '123'),
(104, 'Medical Officer', 'ggg', '55', '125437609873', '0126589753', 'jj@gmail.com', '784512'),
(105, 'Director', 'hhhhggfd', '2345', '125436789056', '0716985214', 'ii@gmail.com', '963784'),
(107, 'Director', 'ff', 'f45', '234567897654', '0876545678', 'ff@gmail.com', '123654'),
(108, 'Director', 'ff', 'f45', '234567897654', '0876545678', 'ff@gmail.com', '123654'),
(109, 'Director', 'ff', 'f45', '234567897654', '0876545678', 'ff@gmail.com', '123654'),
(110, '', '', '', '', '', '', ''),
(111, '', '', '', '', '', '', ''),
(112, '', '', '', '', '', '', ''),
(113, '', '', '', '', '', '', ''),
(114, '', '', '', '', '', '', ''),
(115, '', '', '', '', '', '', ''),
(116, '', '', '', '', '', '', ''),
(117, '', '', '', '', '', '', ''),
(118, '', '', '', '', '', '', ''),
(119, '', '', '', '', '', '', ''),
(120, '', '', '', '', '', '', ''),
(121, '', '', '', '', '', '', ''),
(122, '', '', '', '', '', '', ''),
(123, '', '', '', '', '', '', ''),
(124, '', '', '', '', '', '', ''),
(125, '', '', '', '', '', '', ''),
(126, 'Anesthesiologist Doctor', 'Rr', 'Rr', '123456789086', '0741258096', 'Ff@gmail.com', 'Qwerty'),
(127, 'Anesthesiologist Doctor', 'Rr', 'Rr', '123456789086', '0741258096', 'Ff@gmail.com', 'Qwerty');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `patient_details`
--
ALTER TABLE `patient_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_reg`
--
ALTER TABLE `user_reg`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `patient_details`
--
ALTER TABLE `patient_details`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `user_reg`
--
ALTER TABLE `user_reg`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
