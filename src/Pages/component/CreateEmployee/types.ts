import type { Dispatch, SetStateAction } from "react"

export interface FormikTypesInput{
    name:string
    surname:string
    age:number
    jobPosition:string
}

export interface MainCardContextType {
  name:string
    surname:string
    age:number
    jobPosition:string
  onDataChange: Dispatch<SetStateAction<FormikTypesInput|undefined>>
}