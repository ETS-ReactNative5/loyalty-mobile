import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./style";
import style from "./style";
import BaseScreen from "../../BaseScreen";
import { HEADER_TYPE } from "../../../commons/Constants";
import mapImage from "../../../../res/map.png";
import servicesImage from "../../../../res/list-icon.png";
import locationImage from "../../../../res/location-icon.png";
import EImage from "../../elements/EImage";
import EText from "../../elements/EText";

export default class SearchDetailComponent extends Component {
  render() {
    const baseProps = {
      typeHeader: HEADER_TYPE.SEARCH
    };
    const mapProps = {
        style: styles.mapView,
        source: mapImage
      },
      detailProps = {
        style: styles.detailView,
        text:
          "2 Tran Khac Chan \nTan Dinh Ward \nDistrict 1, Ho Chi Minh City, \nVietnam"
      },
      serviceProps = {
        style: styles.serviceView,
        source: servicesImage,
        onPress: () => {}
      },
      phoneProps = {
        style: styles.phoneView,
        text: "Phone:"
      },
      phoneNumberProps = {
        style: styles.phoneNumberView,
        text: "+84 28 3526 1003",
        onPress: () => {}
      },
      locationIconProps = {
        style: styles.locationIconView,
        source: locationImage,
        onPress: () => {}
      },
      getDirectionsProps = {
        style: styles.getDirectionsView,
        text: "Get Directions",
        onPress: () => {}
      };
    return (
      <BaseScreen {...baseProps}>
        
          <View style={style.view}>
            <EImage {...mapProps} />
            <EText {...detailProps} />
            <EImage {...serviceProps} />
            <View style={style.phone}>
              <EText {...phoneProps} />
              <EText {...phoneNumberProps} />
            </View>
            <View style={style.location}>
              <EImage {...locationIconProps} />
              <EText {...getDirectionsProps} />
            </View>
          </View>
       
      </BaseScreen>
    );
  }
}
