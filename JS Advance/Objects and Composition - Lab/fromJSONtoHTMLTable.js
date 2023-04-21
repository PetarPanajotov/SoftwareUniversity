// You’re tasked with creating an HTML table of students and their scores. You will receive a single string representing an array of objects, the table’s headings should be equal to the object’s keys, while each object’s values should be a new entry in the table. Any text values in an object should be escaped, to avoid introducing dangerous code into the HTML.
function fromJSONtoHTML(json) {
    let parsed = JSON.parse(json);
    let columnNames = Object.keys(parsed[0]);
    let result = '<table>\n';
    result += ' <tr>';
    for (let column of columnNames) {
        result += `<th>${column}</th>`;
    }
    result += '</tr>\n';
    let values = parsed.map(obj => Object.values(obj));
    for (let value of values) {
        result += ` <tr>`;
        for (let index of value) {
        result += `<td>${escape(index)}</td>`;
    }
        result += `</tr>\n`;
    }
    result += '</table>';
    console.log(result);
    function escape(values) {
        return values
        .toString()
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }
}
fromJSONtoHTML(`[{"Name":"Pesho",

"Score":4,

"Grade":8},

{"Name":"Gosho",

"Score":5,

"Grade":8},

{"Name":"Angel",

"Score":5.50,

"Grade":10}]`)