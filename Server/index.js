const mongoose = require('mongoose')
const express = require('express')
const dotenv = require('dotenv')

dotenv.config({path:'./Dependencies/EnvironmentalVariable.env'})

console.log(process.env.PORT)