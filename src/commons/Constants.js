/*
*
@author tri.tran on 2/15/19
*
*/
import { Platform, Dimensions } from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";

export const { width: deviceWidth, height: deviceHeight } = Dimensions.get(
  "window"
);

export const AES_KEY = "LOYALTY_AES_KEY";
export const PAGE_SIZE = 10;

export const TOKEN_KEY = "12j098y3bd938ju9";

export const appScreenName = {
  splash: "splash",
  login: "login",
  home: "home",
  aboutme: "aboutme",
  profile: "profile",
  webview: "webview"
};

export const homeTabName = {
  product: "product",
  specialOffer: "specialOffer",
  search: "search",
  reward: "reward",
  more: "more"
};

export const searchScreenName = {
  searchMain: "searchMain",
  searchDetail: "searchDetail"
};

export const rewardTabName = {
  membership: 0,
  voucher: 1,
  history: 2
};

export const appStyleConstants = {
  iphoneXPadding: Platform.OS === "ios" ? ifIphoneX(25, 0) : 0,
  smallFont: 13,
  mediumFont: 14,
  largeFont: 16,
  bigFont: 18,
  normalFontColor: "#666666",
  UI_ITEM_HEIGHT: Platform.OS === "ios" ? 46 : 50,
  UI_BORDER_RADIUS: 4,
  LARGE_SCREEN_MARGIN: 20,
  NORMAL_SCREEN_MARGIN: 15,
  SMALL_SCREEN_MARGIN: 10,
  BORDER_COLOR_GRAY: "rgba(228, 228, 228, 1)",
  PERCENT_INPUT: 37 / 375
};

export const OS = {
  IOS: 1,
  Android: 2
};

export const HEADER_TYPE = {
  BACKGROUND_IMAGE: 0,
  SEARCH: 1,
  TITLE: 2
};

export const HOME_TABS = {
  product: {
    name: "Home",
    uri: require("../../res/home-icon.png"),
    uriFocus: require("../../res/home-icon-focus.png")
  },
  specialOffer: {
    name: "Special",
    uri: require("../../res/gift-icon.png"),
    uriFocus: require("../../res/gift-icon-focus.png")
  },
  search: {
    name: "Search",
    uri: require("../../res/search-icon.png"),
    uriFocus: require("../../res/search-icon-focus.png")
  },
  reward: {
    name: "Reward",
    uri: require("../../res/star-icon.png"),
    uriFocus: require("../../res/star-icon-focus.png")
  },
  more: {
    name: "More",
    uri: require("../../res/more-icon.png"),
    uriFocus: require("../../res/more-icon-focus.png")
  }
};

export const INTERESTED = [
  { title: "Special Offers", value: "1", isChoose: false },
  { title: "Food", value: "2", isChoose: false },
  { title: "Drinks", value: "3", isChoose: false },
  { title: "Phone Cards", value: "4", isChoose: false }
];

export const ERROR_CODE = {
  FIRST_LOGIN: 1,
  SUCCESS: 0,
  ERROR: -1,
  FORBIDDEN: -403
};

export const DATETIME_TYPE = {
  DATE: "date",
  TIME: "time",
  DATE_TIME: "datetime"
};

export const DEFAULT_DATE_FORMAT = "DD/MM/YYYY";
export const DEFAULT_TIME_FORMAT = "HH:mm:ss a";
export const DEFAULT_DATETIME_FORMAT =
  DEFAULT_DATE_FORMAT + " " + DEFAULT_TIME_FORMAT;
export const DATETIME_ZMT_FORMAT = "ddd, MMM DD YYYY A";
export const FULL_MONTH_FORMAT = "MMMM YYYY";

// create fade effect for App transition
export const fade = props => {
  const { position, scene } = props;

  const index = scene.index;

  const translateX = 0;
  const translateY = 0;

  const opacity = position.interpolate({
    inputRange: [index - 0.7, index, index + 0.7],
    outputRange: [0.3, 1, 0.3]
  });

  return {
    opacity,
    transform: [{ translateX }, { translateY }]
  };
};

export const REDEEM_DATA = [
  {
    vId: 1,
    vName: "Voucher 1",
    vPrice: 12000,
    vPoints: 50,
    vImage: "http://triqtran.github.io/images/loyalty/others/profile.png",
    uAvailables: 0
  },
  {
    vId: 2,
    vName: "Voucher 2",
    vPrice: 7000,
    vPoints: 30,
    vImage: "http://triqtran.github.io/images/loyalty/others/profile.png",
    uAvailables: 0
  },
  {
    vId: 3,
    vName: "Voucher 3",
    vPrice: 500,
    vPoints: 12,
    vImage: "http://triqtran.github.io/images/loyalty/others/profile.png",
    uAvailables: 0
  },
  {
    vId: 4,
    vName: "Voucher 4",
    vPrice: 130,
    vPoints: 3,
    vImage: "http://triqtran.github.io/images/loyalty/others/profile.png",
    uAvailables: 0
  }
];

export const HISTORY_VOUCHER = [
  {
    name: "Voucher 1",
    price: 12000,
    points: 50,
    description:
      "Congratulations, you earned 1 $232K Circle K Voucher. Tap this voucher to redeem now."
  },
  {
    name: "Voucher 2",
    price: 700,
    points: 7,
    description:
      "Congratulations, you earned 1 $232K Circle K Voucher. Tap this voucher to redeem now."
  },
  {
    name: "Voucher 3",
    price: 5000,
    points: 150,
    description:
      "Congratulations, you earned 1 $232K Circle K Voucher. Tap this voucher to redeem now."
  },
  {
    name: "Voucher 4",
    price: 1300,
    points: 50,
    description:
      "Congratulations, you earned 1 $232K Circle K Voucher. Tap this voucher to redeem now."
  }
];

export const STORE_DATA = [
  {
    storeId: 1,
    name: "Circle K",
    phone: "+84 28 3526 1003",
    utilities: [1, 2, 3, 4, 5, 6],
    latitude: 10.7992202,
    longitude: 106.6471282,
    address: "33 Hoàng Hoa Thám, Phường 11, Quận Tân Bình, Tp HCM, Việt Nam"
  },
  {
    storeId: 2,
    name: "Circle K",
    phone: "+84 28 3526 1003",
    utilities: [1, 2, 3, 4, 5, 6],
    latitude: 10.7955759,
    longitude: 106.7192569,
    address: "Landmark 1, Phường 22, Quận Bình Thạnh, Tp Hcm, Việt Nam"
  },
  {
    storeId: 3,
    name: "Circle K",
    phone: "+84 28 3526 1003",
    utilities: [1, 2, 3, 4, 5, 6],
    latitude: 10.77496,
    longitude: 106.67477009999993,
    address: "306 Cao Thắng, Phường 12, Quận 10, Tp HCM, Việt Nam"
  },
  {
    storeId: 4,
    name: "Circle K",
    phone: "+84 28 3526 1003",
    utilities: [1, 2, 3, 4, 5, 6],
    latitude: 10.7729456,
    longitude: 106.70352809999997,
    address: "104 Hồ Tùng Mậu, Phường Bến Nghé, Quận 1, Tp.HCM, Việt Nam"
  },
  {
    storeId: 5,
    name: "Circle K",
    phone: "+84 28 3526 1003",
    utilities: [1, 2, 3, 4, 5, 6],
    latitude: 10.768191,
    longitude: 106.701053,
    address: "175 Nguyễn Công Trứ, Phường Bến Thành, Quận 1, Tp.HCM, Việt Nam"
  },
  {
    storeId: 6,
    name: "Circle K",
    phone: "+84 28 3526 1003",
    utilities: [1, 2, 3, 4, 5, 6],
    latitude: 10.7725285,
    longitude: 106.69585749999999,
    address: "52 Trương Định, Phường Bến Thành, Quận 1, Tp.HCM, Việt Nam"
  },
  {
    storeId: 7,
    name: "Circle K",
    phone: "+84 28 3526 1003",
    utilities: [1, 2, 3, 4, 5, 6],
    latitude: 10.774498,
    longitude: 106.70512299999996,
    address: "24 Hồ Huấn Nghiệp, Phường Bến Nghé, Quận 1, Tp.HCM, Việt Nam"
  },
  {
    storeId: 8,
    name: "Circle K",
    phone: "+84 28 3526 1003",
    utilities: [1, 2, 3, 4, 5, 6],
		latitude: 10.792414,
		longitude: 106.69131289999996,
		address: "2 Trần Khắc Chân, Phường Tân Định, Quận 1, Tp.HCM, Việt Nam"
  },
  {
    storeId: 9,
    name: "Circle K",
    phone: "+84 28 3526 1003",
    utilities: [1, 2, 3, 4, 5, 6],
    latitude: 10.76815,
    longitude: 106.69379400000002,
    address: "250 Đề Thám, Phường Phạm Ngũ Lão, Quận 1, Tp.HCM, Việt Nam"
  },
  {
    storeId: 10,
    name: "Circle K",
    phone: "+84 28 3526 1003",
    utilities: [1, 2, 3, 4, 5, 6],
    latitude: 10.786109500465226,
    longitude: 106.69226713478565,
    address: "62 Phạm Ngọc Thạch, Phường 06, Quận 3, Tp.HCM, Việt Nam"
  }
];
