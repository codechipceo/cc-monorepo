import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import ToggleButton from "./ToggleButton-ui";

export default{
    title:"Component/ToggleButton",
    component:ToggleButton,
    argTypes:{
        Active:{control:Boolean},
        disabled:{control:Boolean},
        onClick:{action:"clicked"}
    }    
} as Meta<typeof ToggleButton>;
const Template :StoryFn<typeof ToggleButton> = (args)=>{
    const [isActive, setisActive] = useState(args.Active)
return(
    <ToggleButton {...args}
    Active={isActive}
    onClick={()=>setisActive((prev)=> !prev)}
    
    />
)
}
export const Default =Template.bind({});
Default.args={
    Active:true,
    disabled:false
}
export const ActiveState=Template.bind({})
ActiveState.args={
    Active:true,
}
export const Disabled =Template.bind({});
Disabled.args={
    Active:true,
    disabled:true
}