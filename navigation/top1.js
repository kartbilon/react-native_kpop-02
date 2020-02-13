import React from 'react'
import { Text, Platform } from 'react-native';


// 북마크 기능 , 푸쉬 알람
// 모달 웹뷰 인앱 오류 해결하기
// 나는 안드로이드 오류 해결하기
// 바텀 네비게이션 북마크 스크린 추가

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import bottom1 from "./bottom1";
import bottom2 from "./bottom2";
import bottom3 from "./bottom3";

import A from '../screens/A';
import B from '../screens/B';
import C from '../screens/C';
import D from '../screens/D';
import F from '../screens/F';
import G from '../screens/G';

const top1 = createMaterialTopTabNavigator({
  home: { screen: A },
  '(G)I-DLE': { screen: B },
  'BTS': { screen: C },
  'BLACKPINK': { screen: D },
  'EXO': { screen: D },
  'GOT7': { screen: D },
  'IKON': { screen: D },
  'IU': { screen: D },
  'MOMOLAND': { screen: D },
  'REDVELVET': { screen: D },
  'TWICE': { screen: D }
},
  {
    tabBarOptions: {
      // 소문자로 나타내는 기능
      upperCaseLabel: false,
      
      // 스크롤 기능
      // scrollEnabled: 'true',
      
      // 활성 탭 하단 표시줄
      // activeTintColor: '#2E64FE',
      
      // 탭바 각각 안 텍스트(레이블)
      labelStyle: {
        fontSize: 15,
        color: 'white',
        // width: '100%'
      },

      // 탭바 전체 
      style: {
        backgroundColor: '#FF0040',
      },

      // 탭바 각각
      tabStyle: {
        width: 150
      },

      indicatorStyle: {
        activeTintColor: 'black',
      }
    }
  });

export default createAppContainer(top1);