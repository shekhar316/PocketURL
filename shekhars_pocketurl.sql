-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 03, 2022 at 01:04 AM
-- Server version: 10.3.32-MariaDB-cll-lve
-- PHP Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shekhars_pocketurl`
--

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `invoiceID` varchar(255) NOT NULL,
  `rzp_orderID` varchar(255) NOT NULL,
  `rzp_payID` varchar(255) NOT NULL,
  `rzp_signature` varchar(255) NOT NULL,
  `amount` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userGoogleID` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `invoiceID`, `rzp_orderID`, `rzp_payID`, `rzp_signature`, `amount`, `createdAt`, `updatedAt`, `userGoogleID`) VALUES
(4, '111141129895580368308', 'order_111141129895580368308', 'pay_IrxBOAMYAnPOVI', 'NA', 10, '2022-02-04 13:47:45', '2022-02-04 13:47:45', '111141129895580368308'),
(7, '100068896609525805579', 'order_100068896609525805579', 'pay_IryKQlwdEViI1T', 'NA', 100, '2022-02-04 14:54:54', '2022-02-04 14:54:54', '100068896609525805579'),
(8, '112201417927071378137', 'order_112201417927071378137', 'pay_It0o0f1zCfUILg', 'NA', 100, '2022-02-07 05:58:50', '2022-02-07 05:58:50', '112201417927071378137'),
(9, '110266480396839000878', 'order_110266480396839000878', 'pay_ItbzDrd4uxMasH', 'NA', 100, '2022-02-08 18:20:53', '2022-02-08 18:20:53', '110266480396839000878');

-- --------------------------------------------------------

--
-- Table structure for table `urls`
--

CREATE TABLE `urls` (
  `id` int(11) NOT NULL,
  `shortid` varchar(255) NOT NULL,
  `longURL` varchar(255) NOT NULL,
  `openCount` int(11) DEFAULT 0,
  `edate` date DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userGoogleID` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `urls`
--

INSERT INTO `urls` (`id`, `shortid`, `longURL`, `openCount`, `edate`, `createdAt`, `updatedAt`, `userGoogleID`) VALUES
(2, 'g785p9q', 'https://cloud.google.com/certification#certification_paths', 2, '2022-03-06', '2022-02-04 06:58:18', '2022-02-04 06:59:18', '115859590620115286779'),
(3, 'nozz3kb', 'https://pocketurl.shekharsaxena.co.in/url/add', 1, '2022-03-06', '2022-02-04 07:08:25', '2022-02-04 07:09:02', '115859590620115286779'),
(5, 'j1mwy1n', 'http://hello.com', 1, '2022-03-06', '2022-02-04 13:44:09', '2022-02-04 13:44:40', '111141129895580368308'),
(9, 'booktownPPT', 'https://docs.google.com/presentation/d/1qey7gmtZc8fInWNFZ8MY-bOH5wLGp7eY/edit#slide=id.p1', 3, '2024-12-31', '2022-02-05 12:36:03', '2022-02-07 09:38:05', '112201417927071378137'),
(10, 'quickshareDemo', 'https://quickshareshekhar316.herokuapp.com/', 3, '2024-12-31', '2022-02-05 12:36:54', '2022-02-07 09:38:05', '112201417927071378137'),
(11, 'pocketurlDemo', 'https://pocketurl.shekharsaxena.co.in/', 4, '2024-12-31', '2022-02-05 12:37:33', '2022-02-07 09:38:05', '112201417927071378137'),
(14, 'myGithub', 'https://github.com/shekhar316', 1, '2022-02-25', '2022-02-07 17:53:38', '2022-02-22 05:17:11', '112201417927071378137'),
(15, 'ounjm81', 'http://csitgeu.in/wp/wp-content/uploads/2022/01/Online-Time-Table-of-CSE-Department-B.Tech_.-VI-Semester-28-01-2022-Online.html', 2, '2022-03-10', '2022-02-08 18:14:59', '2022-02-08 18:16:37', '110266480396839000878'),
(16, 'wgz6aos', 'https://www.youtube.com/anuragkhannayt', 1, '2022-03-11', '2022-02-09 16:28:08', '2022-02-09 16:28:54', '112781352232120196519'),
(23, 'mygit', 'https://github.com/', 1, '2022-03-24', '2022-02-22 05:13:05', '2022-02-22 05:16:11', '112201417927071378137');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `googleID` varchar(255) NOT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `role` int(11) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`name`, `email`, `googleID`, `thumbnail`, `role`, `createdAt`, `updatedAt`) VALUES
('Pavan Saxena', 'pavan.saxena9411@gmail.com', '100068896609525805579', 'https://lh3.googleusercontent.com/a-/AOh14GjQxNqqhZGCntZRhXORCOBk7dxnnLiUCffZdiSu7A=s96-c', 1, '2022-02-04 14:52:26', '2022-02-04 14:54:54'),
('Binay Kumar', '3a2000kr@gmail.com', '107470014086816360109', 'https://lh3.googleusercontent.com/a/AATXAJwPqO-ZpGExJPzu9GsqR4fTxYJNQeHtbZpF5_ho=s96-c', 0, '2022-02-13 17:42:32', '2022-02-13 17:42:32'),
('Abhishek Pal', 'isshuekumar@gmail.com', '110266480396839000878', 'https://lh3.googleusercontent.com/a-/AOh14Gg_ftY0OkSfZhOwNjsQ_pp4xWqkme4bF6yri6Jn-Q=s96-c', 1, '2022-02-08 18:14:24', '2022-02-08 18:20:53'),
('Prakhar Saxena', 'prakhar.shekhar11@gmail.com', '111141129895580368308', 'https://lh3.googleusercontent.com/a-/AOh14GhHOHYoPtH5HOMdgqwxb77XM_UrTKAhnRv5KkZdUQ=s96-c', 1, '2022-02-04 13:42:48', '2022-02-04 13:47:45'),
('SHEKHAR SAXENA', 'shekhar.happy77@gmail.com', '112201417927071378137', 'https://lh3.googleusercontent.com/a-/AOh14Gg7cLCC9ufQKcrXTNUo2rO-4KMW9L0KxbHtsYGnog=s96-c', 1, '2022-02-03 18:42:08', '2022-02-07 05:58:50'),
('Anurag Khanna', 'khannaa395@gmail.com', '112781352232120196519', 'https://lh3.googleusercontent.com/a-/AOh14GgWgyyV0-Ro8Uvzjh1KqozNMAxXmJG9srSpnV5ZMw=s96-c', 0, '2022-02-09 16:25:03', '2022-02-09 16:25:03'),
('Deathrider Rai', 'raideathrider@gmail.com', '113104719372096638963', 'https://lh3.googleusercontent.com/a/AATXAJwCHCRHjSo7fY8EHJf-Gz1-YN64Hbun3i9xKSto=s96-c', 0, '2022-02-13 17:42:37', '2022-02-13 17:42:37'),
('Shekhar Saxena', 'shekharsaxena316@gmail.com', '115405949670508390423', 'https://lh3.googleusercontent.com/a/AATXAJyFgDn80RQF6GRsgTBQuuja7oRU1qdVgobYd4sP=s96-c', 0, '2022-02-03 19:06:16', '2022-02-04 14:30:55'),
('Source Code', 'aresa.aarav@gmail.com', '115859590620115286779', 'https://lh3.googleusercontent.com/a-/AOh14GifrlrT-qO_t11DfWHcwavcgTuTx1s8IakJ0M7Z=s96-c', 0, '2022-02-04 06:57:49', '2022-02-04 06:57:49'),
('Anjali Pandey', 'anjalipandeyap312@gmail.com', '116497022881430585863', 'https://lh3.googleusercontent.com/a-/AOh14GiUgVFz_zZe6jVGyjiU4nNBnwELXCC92M7TZdK-1U0=s96-c', 0, '2022-02-06 02:02:54', '2022-02-06 02:02:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`,`invoiceID`),
  ADD KEY `userGoogleID` (`userGoogleID`);

--
-- Indexes for table `urls`
--
ALTER TABLE `urls`
  ADD PRIMARY KEY (`id`,`shortid`),
  ADD KEY `userGoogleID` (`userGoogleID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`googleID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `urls`
--
ALTER TABLE `urls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`userGoogleID`) REFERENCES `users` (`googleID`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `urls`
--
ALTER TABLE `urls`
  ADD CONSTRAINT `urls_ibfk_1` FOREIGN KEY (`userGoogleID`) REFERENCES `users` (`googleID`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
