/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50045
Source Host           : localhost:3306
Source Database       : dr

Target Server Type    : MYSQL
Target Server Version : 50045
File Encoding         : 65001

Date: 2018-09-15 10:19:19
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `ring`
-- ----------------------------
DROP TABLE IF EXISTS `ring`;
CREATE TABLE `ring` (
  `id` int(11) NOT NULL auto_increment,
  `price` int(11) default NULL,
  `ringname` varchar(255) default NULL,
  `src` varchar(255) default NULL,
  `ringnum` int(11) default '0',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ring
-- ----------------------------
INSERT INTO `ring` VALUES ('1', '8298', 'FOREVER 系列 守护骑士对戒', '/images/ring1.jpg,/images/ring101.jpg,/images/ring102.jpg,/images/ring103.jpg', '0');
INSERT INTO `ring` VALUES ('2', '13498', 'DARRY RING系列 结婚对戒 典雅款', '/images/ring2.jpg,/images/ring201.jpg,/images/ring202.jpg,/images/ring203.jpg', '0');
INSERT INTO `ring` VALUES ('3', '9398', 'DARRY RING系列 结婚对戒 浪漫款', '/images/ring3.jpg,/images/ring301.jpg,/images/ring302.jpg,/images/ring303.jpg', '0');
INSERT INTO `ring` VALUES ('4', '29598', 'DARRY RING系列 结婚对戒', '/images/ring4.jpg,/images/ring401.jpg,/images/ring402.jpg,/images/ring403.jpg', '0');
INSERT INTO `ring` VALUES ('5', '11998', 'DARRY RING系列 YOU & ME', '/images/ring5.jpg,/images/ring501.jpg,/images/ring502.jpg,/images/ring503.jpg', '1');
INSERT INTO `ring` VALUES ('6', '8298', 'TOGETHER系列 10%先生', '/images/ring6.jpg,/images/ring601.jpg,/images/ring602.jpg,/images/ring603.jpg', '1');
INSERT INTO `ring` VALUES ('7', '7398', 'TOGETHER系列 SUNSHINE', '/images/ring7.jpg,/images/ring701.jpg,/images/ring702.jpg,/images/ring703.jpg', '0');
INSERT INTO `ring` VALUES ('8', '5398', 'TOGETHER系列 我们', '/images/ring8.jpg,/images/ring801.jpg,/images/ring802.jpg,/images/ring803.jpg', '0');
INSERT INTO `ring` VALUES ('9', '7698', 'TOGETHER系列 伴侣', '/images/ring9.jpg,/images/ring901.jpg,/images/ring902.jpg,/images/ring903.jpg', '0');
INSERT INTO `ring` VALUES ('10', '5198', 'TOGETHER系列 一生一世', '/images/ring10.jpg,/images/ring1001.jpg,/images/ring1002.jpg,/images/ring1003.jpg', '0');
INSERT INTO `ring` VALUES ('11', '9098', 'DARRY RING系列 真爱印记', '/images/ring11.jpg,/images/ring1101.jpg,/images/ring1102.jpg,/images/ring1103.jpg', '0');
INSERT INTO `ring` VALUES ('12', '8698', 'TOGETHER系列 遇见爱', '/images/ring12.jpg,/images/ring1201.jpg,/images/ring1202.jpg,/images/ring1203.jpg', '0');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL auto_increment,
  `userid` varchar(255) NOT NULL,
  `userpwd` varchar(255) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '123', '123');
INSERT INTO `user` VALUES ('2', '11', '11');
INSERT INTO `user` VALUES ('4', '513922199999999999', '5199');
INSERT INTO `user` VALUES ('5', '222', '222');
