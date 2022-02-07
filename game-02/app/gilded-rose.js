"use strict";
exports.__esModule = true;
exports.GildedRose = exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
    return Item;
}());
exports.Item = Item;
var GildedRose = /** @class */ (function () {
    function GildedRose(items) {
        if (items === void 0) { items = []; }
        this.newRules = {
            firstRule: {
                rules: [
                    {
                        numberAttribute: 1,
                        fatherAttribute: 0,
                        typeConditional: 1,
                        attribute: 'name|name',
                        valueAttribute: "Aged Brie|Backstage passes to a TAFKAL80ETC concert",
                        ruleConditionals: '!=|!=',
                        conditionalAssertion: '&&',
                        attributeToSet: '',
                        valueToSet: ''
                    },
                    {
                        numberAttribute: 2,
                        fatherAttribute: 1,
                        typeConditional: 1,
                        attribute: 'quality',
                        valueAttribute: "0",
                        ruleConditionals: '>',
                        conditionalAssertion: '',
                        attributeToSet: '',
                        valueToSet: ''
                    },
                    {
                        numberAttribute: 3,
                        fatherAttribute: 2,
                        typeConditional: 1,
                        attribute: 'name',
                        valueAttribute: "Sulfuras, Hand of Ragnaros",
                        ruleConditionals: '!=',
                        conditionalAssertion: '',
                        attributeToSet: 'quality',
                        valueToSet: '-1'
                    },
                    {
                        numberAttribute: 4,
                        fatherAttribute: 1,
                        typeConditional: 0,
                        attribute: 'quality',
                        valueAttribute: "50",
                        ruleConditionals: '<',
                        conditionalAssertion: '',
                        attributeToSet: 'quality',
                        valueToSet: '+1'
                    },
                    {
                        numberAttribute: 5,
                        fatherAttribute: 4,
                        typeConditional: 1,
                        attribute: 'name',
                        valueAttribute: "Backstage passes to a TAFKAL80ETC concert",
                        ruleConditionals: '==',
                        conditionalAssertion: '',
                        attributeToSet: '',
                        valueToSet: ''
                    },
                    {
                        numberAttribute: 6,
                        fatherAttribute: 5,
                        typeConditional: 1,
                        attribute: 'sellIn',
                        valueAttribute: "11",
                        ruleConditionals: '<',
                        conditionalAssertion: '',
                        attributeToSet: '',
                        valueToSet: ''
                    },
                    {
                        numberAttribute: 7,
                        fatherAttribute: 6,
                        typeConditional: 1,
                        attribute: 'quality',
                        valueAttribute: "50",
                        ruleConditionals: '<',
                        conditionalAssertion: '',
                        attributeToSet: 'quality',
                        valueToSet: '+1'
                    },
                    {
                        numberAttribute: 8,
                        fatherAttribute: 5,
                        typeConditional: 1,
                        attribute: 'sellIn',
                        valueAttribute: "6",
                        ruleConditionals: '<',
                        conditionalAssertion: '',
                        attributeToSet: '',
                        valueToSet: ''
                    },
                    {
                        numberAttribute: 9,
                        fatherAttribute: 8,
                        typeConditional: 1,
                        attribute: 'quality',
                        valueAttribute: "50",
                        ruleConditionals: '<',
                        conditionalAssertion: '',
                        attributeToSet: 'quality',
                        valueToSet: '+1'
                    }
                ]
            },
            secondRule: {
                rules: [
                    {
                        numberAttribute: 1,
                        fatherAttribute: 0,
                        typeConditional: 1,
                        attribute: 'name',
                        valueAttribute: "Sulfuras, Hand of Ragnaros",
                        ruleConditionals: '!=',
                        conditionalAssertion: '',
                        attributeToSet: 'sellIn',
                        valueToSet: '-1'
                    },
                ]
            },
            thirdRule: {
                rules: [
                    {
                        numberAttribute: 1,
                        fatherAttribute: 0,
                        typeConditional: 1,
                        attribute: 'sellIn',
                        valueAttribute: "0",
                        ruleConditionals: '<',
                        conditionalAssertion: '',
                        attributeToSet: '',
                        valueToSet: ''
                    },
                    {
                        numberAttribute: 2,
                        fatherAttribute: 1,
                        typeConditional: 1,
                        attribute: 'name',
                        valueAttribute: "Aged Brie",
                        ruleConditionals: '!=',
                        conditionalAssertion: '',
                        attributeToSet: '',
                        valueToSet: ''
                    },
                    {
                        numberAttribute: 3,
                        fatherAttribute: 2,
                        typeConditional: 1,
                        attribute: 'name',
                        valueAttribute: "Backstage passes to a TAFKAL80ETC concert",
                        ruleConditionals: '!=',
                        conditionalAssertion: '',
                        attributeToSet: '',
                        valueToSet: ''
                    },
                    {
                        numberAttribute: 4,
                        fatherAttribute: 3,
                        typeConditional: 1,
                        attribute: 'quality',
                        valueAttribute: "0",
                        ruleConditionals: '>',
                        conditionalAssertion: '',
                        attributeToSet: '',
                        valueToSet: ''
                    },
                    {
                        numberAttribute: 5,
                        fatherAttribute: 4,
                        typeConditional: 1,
                        attribute: 'name',
                        valueAttribute: "Sulfuras, Hand of Ragnaros",
                        ruleConditionals: '!=',
                        conditionalAssertion: '',
                        attributeToSet: 'quality',
                        valueToSet: '-1'
                    },
                    {
                        numberAttribute: 6,
                        fatherAttribute: 2,
                        typeConditional: 0,
                        attribute: 'quality',
                        valueAttribute: "50",
                        ruleConditionals: '<',
                        conditionalAssertion: '',
                        attributeToSet: 'quality',
                        valueToSet: '+1'
                    },
                    {
                        numberAttribute: 7,
                        fatherAttribute: 3,
                        typeConditional: 0,
                        attribute: '',
                        valueAttribute: "",
                        ruleConditionals: '',
                        conditionalAssertion: '',
                        attributeToSet: 'quality',
                        valueToSet: '+1'
                    },
                ]
            }
        };
        this.items = items;
    }
    GildedRose.prototype.updateQuality = function () {
        var rules = this.newRules;
        for (var i = 0; i < this.items.length; i++) {
            var arrayRules = this.getListofRules(rules);
            for (var index in arrayRules) {
                this.items[i] = this.sectionImproveRefactor(this.items[i], index);
            }
        }
        return this.items;
    };
    GildedRose.prototype.getListofRules = function (rules) {
        var arrayRules = [];
        Object.keys(rules).forEach(function (prop) {
            arrayRules.push(prop);
        });
        return arrayRules;
    };
    GildedRose.prototype.getKeyByValue = function (object, father, validCondition) {
        var obj = object.filter(function (arr) { return arr.fatherAttribute == father && arr.typeConditional == validCondition; });
        return obj;
    };
    GildedRose.prototype.getConditionalValue = function (rule) {
        var conditional = '';
        var ruleAttribute = rule.attribute.split("|");
        var ruleValueAttribute = rule.valueAttribute.split("|");
        var ruleConditionalAttribute = rule.ruleConditionals.split("|");
        var ruleConditionalAssertion = rule.conditionalAssertion.split("|");
        var ruleAttributeToSet = rule.attributeToSet.split("|");
        var ruleValueToSet = rule.valueToSet.split("|");
        var counter = 0;
        var conditionMultiple = '';
        for (var _i = 0, ruleValueAttribute_1 = ruleValueAttribute; _i < ruleValueAttribute_1.length; _i++) {
            var rv = ruleValueAttribute_1[_i];
            if (rv != '') {
                if (counter > 0)
                    conditionMultiple = ruleConditionalAssertion[counter - 1];
                conditional += conditionMultiple + " (item['" + ruleAttribute[counter] + "'] " + ruleConditionalAttribute[counter] + " '" + rv + "') ";
                counter++;
            }
        }
        var counterResult = 0;
        var resultMultiple = '';
        if (ruleValueToSet.length > 0) {
            for (var _a = 0, ruleValueToSet_1 = ruleValueToSet; _a < ruleValueToSet_1.length; _a++) {
                var rvts = ruleValueToSet_1[_a];
                if (rvts != '') {
                    resultMultiple += "item['" + ruleAttributeToSet[counterResult] + "'] = item['" + ruleAttributeToSet[counterResult] + "']" + rvts + ";";
                    counterResult++;
                }
            }
        }
        var finalCondition = 'valid = (' + conditional + ") ? 1 : 0;";
        if (conditional == '')
            finalCondition = 'valid = 1;';
        var valueReturn = { condition: finalCondition, operation: resultMultiple };
        return valueReturn;
    };
    GildedRose.prototype.sectionImproveRefactor = function (item, numberRule) {
        var rules = this.newRules['' + numberRule + ''].rules;
        var idRule = 0;
        var valid = 1;
        for (var step = 0; step < rules.length; step++) {
            var newNodes = this.getKeyByValue(rules, idRule, valid);
            for (var _i = 0, newNodes_1 = newNodes; _i < newNodes_1.length; _i++) {
                var r = newNodes_1[_i];
                idRule = r.numberAttribute;
                var conditionalValue = this.getConditionalValue(r);
                console.log(conditionalValue);
                eval(conditionalValue.condition);
                if (conditionalValue.operation != '')
                    eval(conditionalValue.operation);
            }
        }
        return item;
    };
    return GildedRose;
}());
exports.GildedRose = GildedRose;
