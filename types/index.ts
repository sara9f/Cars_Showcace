import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    }

    export interface FilterProps {
        manufacture?: string;
        year?: number;
        model?: string;
        limit?: number;
        fuel?: string;
      }

    export interface HomeProps {
        searchParams: FilterProps;
      }



    export interface SearchManufactureProps {
        selected: string;
        setSelected: (selected: string) => void;
      }
    export interface CarProps{
        city_mpg:number;
        class:string;
        combination_mpg:number;
        cylinders:number;
        displacement:number;
        drive:string;
        fuel_type:string;
        highway_mpg:number;
        make:string;
        model:string;
        transmission:string;
        year:number;
    }

    export interface FiltersProps{
        manufacture:string;
        year:number;
        fuel:string;
        limit:number;
        model:string;
    }


    export interface OptionProps{
        title:string;
        value: string;
    }


  
    export interface CustomFilterProps<T> {
        options: OptionProps[];
        setFilter: (selected: T) => void;
      }


    export interface showMoreProps{
        pageNumber : number;
        setLimit: (limit: number) => void;
        isNext:boolean;
    }

    export interface SearchBarProps {
        setManufacture: (manufacturer: string) => void;
        setModel: (model: string) => void;
        }