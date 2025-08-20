"use client"
import React, { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

const TodoList = () => {
    const [date,setDate]= useState<Date | undefined>(new Date());
    const [open,setOpen]= useState(false);
  return (
    <div>
      <h1 className="text-lg font-medium">To do list</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <Button className="flex items-center justify-center w-full mt-4" asChild>
        <PopoverTrigger className=""><CalendarIcon/>{date ? format(date,'PPP'):'Pick a date'}</PopoverTrigger>
        </Button>
        <PopoverContent><Calendar mode="single" selected={date} onSelect={(date)=>{setDate(date); setOpen(false);}}/></PopoverContent>
      </Popover>
      <ScrollArea className="flex flex-col max-h-[500px] mt-4 p-2">
        <Card className="flex flex-row items-center justify-center p-4">
          <Checkbox id="iem1" checked />
          <label htmlFor="item1">
            Lorem ipsum dolor sit amet consect adipisicing elit.
          </label>
        </Card>
        <Card className="flex flex-row items-center justify-center p-4 mt-4">
          <Checkbox id="iem1" checked />
          <label htmlFor="item1">
            Lorem ipsum dolor sit amet consect adipisicing elit.
          </label>
        </Card>
        <Card className="flex flex-row items-center justify-center p-4 mt-4">
          <Checkbox id="iem1" checked />
          <label htmlFor="item1">
            Lorem ipsum dolor sit amet consect adipisicing elit.
          </label>
        </Card>
        <Card className="flex flex-row items-center justify-center p-4 mt-4">
          <Checkbox id="iem1" checked />
          <label htmlFor="item1">
            Lorem ipsum dolor sit amet consect adipisicing elit.
          </label>
        </Card>
        <Card className="flex flex-row items-center justify-center p-4 mt-4">
          <Checkbox id="iem1" checked />
          <label htmlFor="item1">
            Lorem ipsum dolor sit amet consect adipisicing elit.
          </label>
        </Card>
        <Card className="flex flex-row items-center justify-center p-4 mt-4">
          <Checkbox id="iem1" checked />
          <label htmlFor="item1">
            Lorem ipsum dolor sit amet consect adipisicing elit.
          </label>
        </Card>
        <Card className="flex flex-row items-center justify-center p-4 mt-4">
          <Checkbox id="iem1" checked />
          <label htmlFor="item1">
            Lorem ipsum dolor sit amet consect adipisicing elit.
          </label>
        </Card>
        <Card className="flex flex-row items-center justify-center p-4 mt-4">
          <Checkbox id="iem1" checked />
          <label htmlFor="item1">
            Lorem ipsum dolor sit amet consect adipisicing elit.
          </label>
        </Card>
        <Card className="flex flex-row items-center justify-center p-4 mt-4">
          <Checkbox id="iem1" checked />
          <label htmlFor="item1">
            Lorem ipsum dolor sit amet consect adipisicing elit.
          </label>
        </Card>
        <Card className="flex flex-row items-center justify-center p-4 mt-4">
          <Checkbox id="iem1" checked />
          <label htmlFor="item1">
            Lorem ipsum dolor sit amet consect adipisicing elit.
          </label>
        </Card>
        <Card className="flex flex-row items-center justify-center p-4 mt-4">
          <Checkbox id="iem1" checked />
          <label htmlFor="item1">
            Lorem ipsum dolor sit amet consect adipisicing elit.
          </label>
        </Card>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
