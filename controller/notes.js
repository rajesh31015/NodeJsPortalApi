// SELECT * FROM post WHERE authorId = 3;
Post.findAll({
    where : {
        authorId : 3
    }
});
postMessage.findAll({
    where : {
        authorId : {
            [Op.eq] : 3
        }
    }
})
// SELECT * FROM post WHERE authorId = 2 AND status = 1;
Post.findAll({
    where : {
        authorId : 2,
        status : 1
    }
});
Post.findAll({
    where : {
        [Op.and] : [
            { authorId : 2},
            { status : 1}
        ]
    }
});
Post.findAll({
    where : {
        [Op.and] : [{
            authorId : 2,
            status : 2
        }]
    }
});
Post.findAll({
    where : {
        [Op.or] : [{
            authorId : 2,
            status : 2
        }]
    }
});
Post.findAll({
    where : {
        [Op.and] : [{
            authorId : {
                [Op.eq] : 2
            },
            status : {
                [Op.eq] : 1
            }
        }]
    }
});
// SELECT * FROM post WHERE authodId = 1 OR status = 1;
Post.findAll({
    where : {
        [Op.or] : [
            {authorId : 1},
            {status : 1}
        ]
    }
});