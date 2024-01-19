import {Controller, Get} from '@nestjs/common';
import {ItemsService} from "./items.service";
import {ApiOperation, ApiTags} from "@nestjs/swagger";

@Controller('items')
@ApiTags('Factorio')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {
    }

    @Get("all")
    @ApiOperation({summary: 'All item data', description: 'Return all items data'})
    getAllData(){
        return this.itemsService.getData();
    }

    @Get()
    @ApiOperation({summary: "Items List", description: 'Return a list of all items'})
    getItems() {
        return this.itemsService.getListItems();
    }

    @Get("crafts")
    @ApiOperation({summary: "Craft List", description: 'Return a list of all crafts'})
    getCrafts() {
        return this.itemsService.getCrafts();
    }
}
