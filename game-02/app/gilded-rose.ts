export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;
    newRules = {
        firstRule: {
            rules:[
                {
                    numberAttribute:1,
                    fatherAttribute:0,
                    typeConditional: 1,
                    attribute: 'name|name',
                    valueAttribute: "Aged Brie|Backstage passes to a TAFKAL80ETC concert",
                    ruleConditionals: '!=|!=',
                    conditionalAssertion: '&&',
                    attributeToSet:'',
                    valueToSet:''
                },
                {
                    numberAttribute:2,
                    fatherAttribute:1,
                    typeConditional: 1,
                    attribute: 'quality',
                    valueAttribute: "0",
                    ruleConditionals: '>',
                    conditionalAssertion: '',
                    attributeToSet:'',
                    valueToSet:''
                },
                {
                    numberAttribute:3,
                    fatherAttribute:2,
                    typeConditional: 1,
                    attribute: 'name',
                    valueAttribute: "Sulfuras, Hand of Ragnaros",
                    ruleConditionals: '!=',
                    conditionalAssertion: '',
                    attributeToSet:'quality',
                    valueToSet:'-1'
                },
                {
                    numberAttribute:4,
                    fatherAttribute:1,
                    typeConditional: 0,
                    attribute: 'quality',
                    valueAttribute: "50",
                    ruleConditionals: '<',
                    conditionalAssertion: '',
                    attributeToSet:'quality',
                    valueToSet:'+1'
                },
                {
                    numberAttribute:5,
                    fatherAttribute:4,
                    typeConditional: 1,
                    attribute: 'name',
                    valueAttribute: "Backstage passes to a TAFKAL80ETC concert",
                    ruleConditionals: '==',
                    conditionalAssertion: '',
                    attributeToSet:'',
                    valueToSet:''
                },
                {
                    numberAttribute:6,
                    fatherAttribute:5,
                    typeConditional: 1,
                    attribute: 'sellIn',
                    valueAttribute: "11",
                    ruleConditionals: '<',
                    conditionalAssertion: '',
                    attributeToSet:'',
                    valueToSet:''
                },
                {
                    numberAttribute:7,
                    fatherAttribute:6,
                    typeConditional: 1,
                    attribute: 'quality',
                    valueAttribute: "50",
                    ruleConditionals: '<',
                    conditionalAssertion: '',
                    attributeToSet:'quality',
                    valueToSet:'+1'
                },
                {
                    numberAttribute:8,
                    fatherAttribute:5,
                    typeConditional: 1,
                    attribute: 'sellIn',
                    valueAttribute: "6",
                    ruleConditionals: '<',
                    conditionalAssertion: '',
                    attributeToSet:'',
                    valueToSet:''
                },
                {
                    numberAttribute:9,
                    fatherAttribute:8,
                    typeConditional: 1,
                    attribute: 'quality',
                    valueAttribute: "50",
                    ruleConditionals: '<',
                    conditionalAssertion: '',
                    attributeToSet:'quality',
                    valueToSet:'+1'
                }
            ],
        },
        secondRule: {
            rules:[      
                {
                    numberAttribute:1,
                    fatherAttribute:0,
                    typeConditional: 1,
                    attribute: 'name',
                    valueAttribute: "Sulfuras, Hand of Ragnaros",
                    ruleConditionals: '!=',
                    conditionalAssertion: '',
                    attributeToSet:'sellIn',
                    valueToSet:'-1'
                },      
            ],   
        },
        thirdRule: {
            rules:[      
                {
                    numberAttribute:1,
                    fatherAttribute:0,
                    typeConditional: 1,
                    attribute: 'sellIn',
                    valueAttribute: "0",
                    ruleConditionals: '<',
                    conditionalAssertion: '',
                    attributeToSet:'',
                    valueToSet:''
                },
                {
                    numberAttribute:2,
                    fatherAttribute:1,
                    typeConditional: 1,
                    attribute: 'name',
                    valueAttribute: "Aged Brie",
                    ruleConditionals: '!=',
                    conditionalAssertion: '',
                    attributeToSet:'',
                    valueToSet:''
                }, 
                {
                    numberAttribute:3,
                    fatherAttribute:2,
                    typeConditional: 1,
                    attribute: 'name',
                    valueAttribute: "Backstage passes to a TAFKAL80ETC concert",
                    ruleConditionals: '!=',
                    conditionalAssertion: '',
                    attributeToSet:'',
                    valueToSet:''
                },
                {
                    numberAttribute:4,
                    fatherAttribute:3,
                    typeConditional: 1,
                    attribute: 'quality',
                    valueAttribute: "0",
                    ruleConditionals: '>',
                    conditionalAssertion: '',
                    attributeToSet:'',
                    valueToSet:''
                },
                {
                    numberAttribute:5,
                    fatherAttribute:4,
                    typeConditional: 1,
                    attribute: 'name',
                    valueAttribute: "Sulfuras, Hand of Ragnaros",
                    ruleConditionals: '!=',
                    conditionalAssertion: '',
                    attributeToSet:'quality',
                    valueToSet:'-1'
                },
                {
                    numberAttribute:6,
                    fatherAttribute:2,
                    typeConditional: 0,
                    attribute: 'quality',
                    valueAttribute: "50",
                    ruleConditionals: '<',
                    conditionalAssertion: '',
                    attributeToSet:'quality',
                    valueToSet:'+1'
                },
                {
                    numberAttribute:7,
                    fatherAttribute:3,
                    typeConditional: 0,
                    attribute: '',
                    valueAttribute: "",
                    ruleConditionals: '',
                    conditionalAssertion: '',
                    attributeToSet:'quality',
                    valueToSet:'+1'
                },
            ],   
        },
    };

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        var rules = this.newRules;
        for (let i = 0; i < this.items.length; i++) {
            let arrayRules = this.getListofRules(rules);
            for(var index in arrayRules)
            { 
                this.items[i] = this.sectionImproveRefactor(this.items[i], index);
            }
        }

        return this.items;
    }

    getListofRules(rules:any) {
        let arrayRules: string[] = [];
        Object.keys(rules).forEach(function(prop) {  
            arrayRules.push(prop);
        });

        return arrayRules;
    }

    getKeyByValue(object:any, father:number, validCondition:number):any {
        let obj = object.filter(function(arr){return arr.fatherAttribute == father && arr.typeConditional == validCondition});
        return obj;
    }

    getConditionalValue(rule:any){
        let conditional= '';
        let ruleAttribute = rule.attribute.split("|");
        let ruleValueAttribute = rule.valueAttribute.split("|");
        let ruleConditionalAttribute = rule.ruleConditionals.split("|");
        let ruleConditionalAssertion = rule.conditionalAssertion.split("|");
        let ruleAttributeToSet = rule.attributeToSet.split("|");
        let ruleValueToSet = rule.valueToSet.split("|");

        let counter: number = 0;
        let conditionMultiple:string = '';
        
        for(let rv of ruleValueAttribute) {
            if (rv != '')
            {
                if (counter > 0) conditionMultiple = ruleConditionalAssertion[counter-1];
                conditional += conditionMultiple + " (item['"+ruleAttribute[counter]+"'] "+ruleConditionalAttribute[counter]+" '"+rv+"') ";
                counter ++;
            }
        }

        let counterResult: number = 0;
        let resultMultiple:string = '';
        if(ruleValueToSet.length > 0){
            for(let rvts of ruleValueToSet) {
                if (rvts != '')
                {
                    resultMultiple +="item['"+ruleAttributeToSet[counterResult]+"'] = item['"+ruleAttributeToSet[counterResult]+"']"+rvts+";";
                    counterResult++;
                }
            }
        }

        let finalCondition = 'valid = ('+conditional+") ? 1 : 0;";

        if (conditional == '') finalCondition = 'valid = 1;';

        let valueReturn ={condition: finalCondition, operation: resultMultiple};
        
        return valueReturn;
    }

    sectionImproveRefactor(item: Item, numberRule: string): Item{
        const rules = this.newRules[''+numberRule+''].rules;
        let idRule:number = 0;
        let valid:number = 1;
        for (let step = 0; step < rules.length; step++) {
            let newNodes =this.getKeyByValue(rules, idRule, valid); 
            for(let r of newNodes) {
                idRule = r.numberAttribute;
                let conditionalValue =this.getConditionalValue(r);
                console.log(conditionalValue);
                eval(conditionalValue.condition);
                if (conditionalValue.operation != '') eval(conditionalValue.operation);
            }
        }
                    
        return item;
    }
}