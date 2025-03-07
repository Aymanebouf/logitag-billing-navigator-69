
import React from 'react';
import { classNames } from 'primereact/utils';

// This component helps adapt PrimeReact components to maintain our existing styling
export const PrimeAdapter = {
  // Add adapter methods for specific components as needed
  buttonClass: (variant?: string, size?: string, className?: string) => {
    const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    const variantClasses = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    };
    
    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    };
    
    return classNames(
      baseClasses,
      variant && variantClasses[variant as keyof typeof variantClasses],
      size && sizeClasses[size as keyof typeof sizeClasses],
      className
    );
  },
  
  cardClass: (className?: string) => {
    return classNames(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    );
  },
  
  inputClass: (className?: string) => {
    return classNames(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      className
    );
  },
  
  tableClass: (className?: string) => {
    return classNames(
      "w-full text-sm",
      className
    );
  },
  
  selectClass: (className?: string) => {
    return classNames(
      "flex h-10 w-full items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    );
  },
  
  dialogClass: (className?: string) => {
    return classNames(
      "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg",
      className
    );
  },
  
  labelClass: (className?: string) => {
    return classNames(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    );
  }
};
