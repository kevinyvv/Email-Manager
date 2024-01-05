import { useEffect, useState } from "react"
import React from 'react'


const Mail = (props:any) => {

    return (
    <div className="space-y-4 bg-slate-950 rounded-lg py-4 px-8 left-0 w-1/2 mx-8 my-4 h-96"> 

    <h1 className="text-sm">Mail Viewer</h1>
        {props.props == null || props.props.sender == null ? <h1 className="skeleton w-1/3 h-8"> </h1>: 

        <h1 className="px-2 outline rounded-sm font-bold"> From: {props.props.sender} </h1>}

        {props.props == null || props.props.dt == null ? <h2 className="skeleton w-1/2 h-8"> </h2>: 

        <h2 className="px-2 outline rounded-sm font-bold"> Date: {props.props.dt} </h2>}

        {props.props == null || props.props.subject == null ? <h3 className="skeleton h-8"> </h3>:

        <h3 className="px-2 outline rounded-sm font-bold"> Subject: {props.props.subject} </h3>}

        {props.props == null || props.props.content == null ? <p className="skeleton w-100 h-36 text-center py-2 font-bold"> Please select an email from your list to start. </p>:
        <p className="outline px-2 rounded-sm outline-1 h-1/2 overflow-y-scroll whitespace-pre"> {props.props.content} </p>}

    </div>
  )
}

export default Mail