import { ReactElement } from "react"

export type resumeProps = {
  showLinks: boolean,
  screenWidth: number,
}

export type navBarProps = {
  showLinks: boolean,
  setShowLinks: Function
}

export type windowSize = {
  width: number,
  height: number,
}

export type serviceProps = {
  title: string,
  description: string,
  image: ReactElement
}

export type contactFormData = {
  names: string,
  email: string,
  message: string,
}