const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/posts', (req, res) => {
    const data = [
        { id: '1adfasf', title: 'Lorem Ipsum', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Dome pro bono a volare que serra cantare alupe degrassa como biene pertuto la vita. Dolce gusto semperit veni vidi vici a rosa pulchra est. Sono dominci urbi et odbi vannusem compile a peringo santoro deminter composus. A vicere demelius condirmpo gutaer alma mater horno coturas domenica.' },
        { id: '2evxc34', title: 'Lorem Ipsum II', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Dome pro bono a volare que serra cantare alupe degrassa como biene pertuto la vita. Dolce gusto semperit veni vidi vici a rosa pulchra est. Sono dominci urbi et odbi vannusem compile a peringo santoro deminter composus. A vicere demelius condirmpo gutaer alma mater horno coturas domenica.' },
        { id: 's9skc9s', title: 'Lorem Ipsum III', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Dome pro bono a volare que serra cantare alupe degrassa como biene pertuto la vita. Dolce gusto semperit veni vidi vici a rosa pulchra est. Sono dominci urbi et odbi vannusem compile a peringo santoro deminter composus. A vicere demelius condirmpo gutaer alma mater horno coturas domenica.' }
    ]
    res.json(data);
});

app.listen(8000, function(){
    console.log('Server is running on port:', 8000);
});