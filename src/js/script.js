// Fahrzeuge als Objekte
const vehicle = [
	{
		name: "Rüstwagen",
		plate: "",
		equipment: [
			{ room: "G1", items: ["A", "B2", "C"] },
			{ room: "G2", items: ["D", "E", "F"] },
		],
	},
	{
		name: "Tanklöschwagen",
	},
];
// console.log(vehicle);

let html = "";
let listItemes = "";
const vehicleItem = vehicle.length;
const rooms = document.querySelector(".rooms");
const click = document.querySelector("#add");

const itemsList = (item, index) => {
	listItemes += `
    <li class="list-group-item">${item}</li>
    `;
	console.log("itemsList: " + listItemes);
};

// for(var i = 0; i < arr.length; i++) {
//      var n = arr[i];
//      if (n == 3) {
//          break;
//       }
//       alert(n);
//    });

const itemsG1 = vehicle[0].equipment[0].items.forEach(itemsList);
console.log("itemsG1: " + itemsG1);

const generateRoomsTemplate = () => {
	html = `
        <tr>
            <th scope="row">${vehicle[0].equipment[0].room}</th>
            <td>
                <img src="src/img/rw_g1.JPEG" class="img-thumbnail rounded-top" alt="" width="200px" />

            </td>
            <td>
            <ul class="list-group">${listItemes}</ul>
            </td>
        </tr>
    `;

	rooms.innerHTML += html;
};

click.addEventListener("click", (e) => {
	generateRoomsTemplate();
});
