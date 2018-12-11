export default class AttrData  {
    static getAttrData() {
        const justifyContent = {
            index: 0,
            data: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around']
        };
        const flexDirection = {
            index: 0,
            data: ['row', 'row-reverse', 'column', 'column-reverse']
        };
        const flexWrap = {
            index: 0,
            data: ['nowrap', 'wrap', 'wrap-reverse']
        };
        const alignItems = {
            index: 0,
            data: ['stretch', 'center', 'flex-start', 'flex-end', 'baseline']
        };
        const alignContent = {
            index: 0,
            data: ['stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around']
        };
        return {
            justifyContent, flexDirection, flexWrap, alignItems, alignContent
        };
    }

    static getAttrLooped(attr) {
        return attr.data[attr.index % attr.data.length];
    }

    static getAttr (attr) {
        console.log(attr);
        return attr.data[attr.index % attr.data.length]
    }
}
