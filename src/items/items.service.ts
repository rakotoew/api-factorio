import {Injectable} from '@nestjs/common';
import * as fs from 'fs';
import {ClassModel} from './class.model'
import {Craft, Item, SimpleItem} from "./Items.model";
import {join} from 'path';

@Injectable()
export class ItemsService {
    getClassData(): ClassModel[] {
        const classDataPath = join(__dirname, '..', '..','src', 'data', 'class.json');
        return JSON.parse(fs.readFileSync(classDataPath, 'utf8'));
    }

    getItemsData(): Item[] {
        const itemDataPath = join(__dirname, '..', '..','src', 'data', 'items.json');
        return JSON.parse(fs.readFileSync(itemDataPath, 'utf8'));
    }

    getCraftsData(): Craft[] {
        const itemDataPath = join(__dirname, '..', '..','src', 'data', 'crafts.json');
        return JSON.parse(fs.readFileSync(itemDataPath, 'utf8'));
    }

    getData(): any{
        const classes = this.getClassData();
        const items = this.getItemsData();
        const data = classes.map((c) => {
            console.log("classe :")
            console.log(c);
            const dataclass = [];
            for(let i = 0; i < c.subclass.length; i++){
                const subclass = []
                items.forEach((item) => {
                    if(item.class == c.subclass[i]){
                        subclass.push({item :item});
                    }
                });
                dataclass.push({name: c.subclass[i], items: subclass})
            }
            return {name: c.name, subclass: dataclass};
        });
        return data;
    }

    getListItems(){
        const items = this.getItemsData();
        const data: SimpleItem[] = [];
        items.forEach((item)=> {
            data.push({id: item.id, name: item.name, icon: item.icons, craft: item.craft})
        })
        return data;
    }

    getCrafts(): Craft[]{
        return this.getCraftsData();
    }
}
