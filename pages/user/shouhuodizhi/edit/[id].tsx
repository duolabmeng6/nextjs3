import {Button, Checkbox, Form, Input, NavBar, Toast} from 'antd-mobile';
import Router, {useRouter} from 'next/router'
import React, {FC, useEffect, useRef, useState} from 'react'


const index = () => {
    const router = useRouter()
    const { slug } = router.query
    console.log("slug", slug)
    return <p>Post: {slug}</p>
}

export default index
