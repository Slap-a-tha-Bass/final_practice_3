import { Request } from "express";

export interface mysqlResponse{
    affectedRows: number,
    insertId: number,
    sqlMessage: string
}
export interface Books {
    id?: number,
    title?: string,
    author?: string,
    price?: number,
    _created?: Date,
    isPreview?: boolean
}
export interface Users {
    id?: number,
    name?: string,
    email?: string,
    password?: string,
    _created?: Date
}
export interface ReqUsers extends Request {
    user?: Users
}
export interface Categories {
    id: number,
    name: string
}