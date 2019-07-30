import React from 'react'
import { Row } from 'react-grid-system';

import Dice from './Dice'


const Divs = (props) => {

   let diceList = props.diceList
// eslint-disable-next-line
   const k4list = diceList.filter((item) => { if (item === "k4") return "k4" });
   // eslint-disable-next-line
   const k6list = diceList.filter((item) => { if (item === "k6") return  "k6" });
   // eslint-disable-next-line
   const k8list = diceList.filter((item) => { if (item === "k8") return "k8" });
   // eslint-disable-next-line
   const k10list = diceList.filter((item) => { if (item === "k10") return "k10"}); 
   // eslint-disable-next-line
   const k12list = diceList.filter((item) => { if (item === "k12") return "k12" });
   // eslint-disable-next-line
   const k20list = diceList.filter((item) => { if (item === "k20") return "k20" });
   // eslint-disable-next-line
   const k100list = diceList.filter((item) => { if (item === "k100") return "k100" });

   return (

      <>
         {props.k4 ? <Row justify="center" debug> {k4list.map((item, index) => <Dice type={item} key={index} resetGo={props.resetGo} go={props.go} />)}</Row> : null}

         {props.k6 ? <Row justify="center" debug> {k6list.map((item, index) => <Dice type={item} key={index} resetGo={props.resetGo} go={props.go} />)}</Row> : null}

         {props.k8 ? <Row justify="center" debug> {k8list.map((item, index) => <Dice type={item} key={index} resetGo={props.resetGo} go={props.go} />)}</Row> : null}

         {props.k10 ? <Row justify="center" debug> {k10list.map((item, index) => <Dice type={item} key={index} resetGo={props.resetGo} go={props.go} />)}</Row> : null}

         {props.k12 ? <Row justify="center" debug> {k12list.map((item, index) => <Dice type={item} key={index} resetGo={props.resetGo} go={props.go} />)}</Row> : null}

         {props.k20 ? <Row justify="center" debug> {k20list.map((item, index) => <Dice type={item} key={index} resetGo={props.resetGo} go={props.go} />)}</Row> : null}

         {props.k100 ? <Row justify="center" debug> {k100list.map((item, index) => <Dice type={item} key={index} resetGo={props.resetGo} go={props.go} />)}</Row> : null}


      </>

   )
}

export default Divs;
