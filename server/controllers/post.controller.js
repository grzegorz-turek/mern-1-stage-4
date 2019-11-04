const Post = require('../models/post.model');

// get all posts
exports.getPosts = async (req, res) => {
    try {
        res.status(200).json(await Post.find());
    } catch(err) {
        res.status(500).json(err);
    }
};

// get single post by id
exports.getSinglePost = async (req, res) => {
    try {
        res.status(200).json(await Post.findOne({ id: req.params.id }));
    } catch(err) {
        res.status(500).json(err);
    }
};

/*
exports.getPosts = function (req, res) {
    const data = [
        { id: '1adfasf', title: 'Lorem Ipsum', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Dome pro bono a volare que serra cantare alupe degrassa como biene pertuto la vita. Dolce gusto semperit veni vidi vici a rosa pulchra est. Sono dominci urbi et odbi vannusem compile a peringo santoro deminter composus. A vicere demelius condirmpo gutaer alma mater horno coturas domenica.' },
        { id: '2evxc34', title: 'Lorem Ipsum II', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Dome pro bono a volare que serra cantare alupe degrassa como biene pertuto la vita. Dolce gusto semperit veni vidi vici a rosa pulchra est. Sono dominci urbi et odbi vannusem compile a peringo santoro deminter composus. A vicere demelius condirmpo gutaer alma mater horno coturas domenica.' },
        { id: 's9skc9s', title: 'Lorem Ipsum III', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Dome pro bono a volare que serra cantare alupe degrassa como biene pertuto la vita. Dolce gusto semperit veni vidi vici a rosa pulchra est. Sono dominci urbi et odbi vannusem compile a peringo santoro deminter composus. A vicere demelius condirmpo gutaer alma mater horno coturas domenica.' },
        { id: 'f3wgtvt', title: 'Lorem Ipsum IV', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit' },
        { id: '45gw34f', title: 'Lorem Ipsum V', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit' }
    ]
    res.json(data);
  };
  */