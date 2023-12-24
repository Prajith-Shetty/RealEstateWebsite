import asyncHandler from "express-async-handler";

import { prisma } from "../config/prismaConfig.js";

export const createResidency = asyncHandler(async (req, res) => {
    const { title, description, price, address, country, city, facilities, image, userEmail } = req.body.data;
    console.log(req.body.data)
    try {
        const residency = await prisma.residency.create({
            data: {
                title,
                description,
                price,
                address,
                country,
                city, 
                facilities, 
                image,
                owner : {connect: {email: userEmail}}   
                //userEmail refers to User collection, so we specified owner field
            }
        });
        res.send({message: "Residency created successfully",
        residency});
    } catch (err) {
        if (err.code === "P2002") {
            throw new Error("A residency with address already present")
        }
        throw new Error(err.message);
    }
});

export const getAllResidencies = asyncHandler(async(req,res)=>{
    try{
        const residencies = await prisma.residency.findMany({
            orderBy: {
                createdAt: "desc"
                //order by 'createdAt' in descending order
            }
        });
        res.send(residencies);
    }
    catch (err) {
        throw new Error(err.message);
    }
});

//function to get specific document/residency
export const getResidency = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    try{
        const residency = await prisma.residency.findUnique({
            where:{id:id}
        });
        res.send(residency);
    }
    catch(err){
        throw new Error(err.message);
    }
})