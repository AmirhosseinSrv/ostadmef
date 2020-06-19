import React from "react"
import { useAuthState, useAuthDispatch } from "../../contexts/auth-context"

import "./login.style.scss"

import Main from "../../assets/images/Main.png"

import Rodal from "rodal"
// include styles
import "rodal/lib/rodal.css"

import { NavLink } from "react-router-dom"

import Title from "../../components/title/title.component"
import LoginForm from "../../components/login-form/login-form.component"
import DecoratedImage from "../../components/decorated-image/decorated-image.component"

function Login(props) {
  const { authModalOpen } = useAuthState()
  const setAuthModalOpen = useAuthDispatch()

  return (
    <div className="login">
      <Rodal
        visible={authModalOpen}
        onClose={() => setAuthModalOpen({ type: "TOGGLE_MODAL" })}
        className="w-screen h-screen"
        customStyles={{
          height: "100vh",
          width: "100vw",
        }}
        animation="slideUp"
        duration={500}
      >
        <div className="relative w-full h-full flex flex-col text-center">
          <NavLink to="/">
            <h1 className="font-bold text-4xl leading-tight">لــــینوم</h1>
          </NavLink>
          <div className="h-full w-full flex justify-center mt-8">
            <div className="container">
              <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col items-start py-8 mx-auto text-center">
                  <div className="">
                    <Title>ورود به لینوم</Title>
                  </div>
                  <span className="my-5 text-blue-1000 text-lg">
                    جهت ورود یا ثبت‌نام در لینوم فرم زیر را پر کنید
                  </span>
                  <div className="my-10">
                    <LoginForm />
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="pt-8 w-full sm:w-10/12 lg:w-auto mx-auto">
                    <DecoratedImage mainImg={Main} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Rodal>
    </div>
  )
}

export default Login
