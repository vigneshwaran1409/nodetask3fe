import React from 'react'
import Edit from '../common/Edit'
import Topbar from '../common/Topbar'
import Addmentor from '../page/mentor/Addmentor'
import Allmentor from '../page/mentor/Allmentor'
import Dashboard from '../page/Dashboard'
import Allstudent from '../page/student/Allstudent'
import Editstudent from '../page/student/Editstudent'
import Student from '../page/student/Student'
import Studentlist from '../page/student/Studentlist'
import { Navigate } from 'react-router-dom'


const AppRoutes =[
    {
        path: "/",
        exact: true,
        element: <><Topbar/><Dashboard/></>
    },
    {
        path: "/addmentor",
        exact: true,
        element: <><Topbar/><Addmentor/></>
    },
    {
        path: "/mentor",
        exact: true,
        element: <><Topbar/><Allmentor/></>
    },
    {
        path: "/student",
        exact: true,
        element: <><Topbar/><Student/></>
    },
    {
        path: "/all-student",
        exact: true,
        element: <><Topbar/><Allstudent/></>
    },
    {
        path: "/student-list/:id",
        exact: true,
        element: <><Topbar/><Studentlist/></>
    },
    {
        path: "/edit/:id",
        exact: true,
        element: <><Edit/></>
    },
    {
        path: "/student-edit/:id",
        exact: true,
        element: <><Editstudent/></>
    },
    {
        path: "/*",
        exact: true,
        element: <Navigate to="/" />
    },
]

export default AppRoutes