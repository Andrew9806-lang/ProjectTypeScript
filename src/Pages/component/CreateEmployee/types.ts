import type { Dispatch, SetStateAction } from "react"

export interface FormikTypesInput{
    name:string
    surname:string
    age:number
    jobPosition:string
}

export interface MainCardContextType {
  name:string|undefined
    surname:string|undefined
    age:number|undefined
    jobPosition:string|undefined
  onDataChange: Dispatch<SetStateAction<FormikTypesInput|undefined>>
}