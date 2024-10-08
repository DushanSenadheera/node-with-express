import { Request, Response } from "express";
import db from "./db";

export const getApi = async (req: Request, res: Response) => {
  try {
    const date = new Date().toUTCString();
    const randNum = Math.floor(Math.random() * 101);

    res.status(200).json({
      Date: date,
      "Random Number": randNum,
    });
  } catch (error) {
    res.status(500).json(`Server error: ${error}`);
  }
};

export const getAllEmp = async (req: Request, res: Response) => {
  try {
    res.status(200).json(db.employee);
  } catch (error) {
    res.status(500).json(`Server error: ${error}`);
  }
};

export const getEmpById = async (req: Request, res: Response) => {
  try {
    const empId = parseInt(req.params.id, 10);
    const emp = db.employee.find((e) => e.id === empId);

    res.status(200).json(emp);
  } catch (error) {
    res.status(500).json(`Server error: ${error}`);
  }
};

export const addEmp = async (req: Request, res: Response) => {
  try {
    const { id, name, Position } = req.body;
    db.employee.push({ id, name, Position });

    res.status(201).json(db.employee);
  } catch (error) {
    res.status(500).json(`Server error: ${error}`);
  }
};

export const updateEmp = async (req: Request, res: Response) => {
  try {
    const { id, name, Position } = req.body;
    const emp = db.employee.find((emp) => emp.id === id);

    if (emp) {
      emp.name = name;
      emp.Position = Position;
      res.status(200).json(emp);
    } else {
      res.status(404).json("Employee not found");
    }
  } catch (error) {
    res.status(500).json(`Server error: ${error}`);
  }
};

export const delEmp = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const remainingEmp = db.employee.filter((emp) => emp.id !== id);
    res.status(200).json(remainingEmp);
  } catch (error) {
    res.status(500).json(`Server error: ${error}`);
  }
};
