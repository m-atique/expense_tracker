const { createContext } = require("react")

let intial_transections =[
    {desc:"cash", amount:+9200},
    {desc:"car", amount:-500},
    {desc:"book", amount:-400},
    {desc:"cash", amount:+5200},
    {desc:"car", amount:-500},
    {desc:"book", amount:-400}

]

export  const transCntxt = createContext(intial_transections)