var express = require('express'),
    app = express();

//Express 3
//app.configure(function() {
//    app.use(express.static(__dirname, '/'));
//});

//Express 4
//app.use(express.static(__dirname, '/'));
app.use(express.static(__dirname + '/'));

app.get('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = {};
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === customerId) {
            data = customers[i];
            break;
        }
    }
    res.json(data);
});

app.get('/customers', function(req, res) {
    res.json(customers);
    //res.json(500, { error: 'An error has occurred!' });
});

app.get('/orders', function(req, res) {

    alert('asdsadad');
    var orders = [];
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].orders) {
            for (var j=0,ordersLen=customers[i].orders.length;j<ordersLen;j++) {
                orders.push(customers[i].orders[j]);
            }
        }
    }
    res.json(orders);
});

app.delete('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = { status: true };
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === customerId) {
            customers.splice(i,1);
            data = { status: true };
            break;
        }
    }
    res.json(data);
});

app.listen(8080);

console.log('Express listening on port 8080');

customers = [
    {id: 1, joined:'2000-12-02',   name:'Dinush',    city:'Melbourne',   orderTotal:'10.999',  orders: [
        {
            id: 1,
            product: 'Shoes',
            total: 9.9956
        }
    ]},
    {id: 2, joined:'2009-12-02',   name:'Hashi',     city:'Melbourne',   orderTotal:'12.000',  orders: [
        {
            id: 2,
            product: 'Baseball',
            total: 9.995
        },
        {
            id: 3,
            product: 'Bat',
            total: 9.995
        }
    ]},
    {id: 3, joined:'2000-12-02',   name:'Tom',       city:'Perth',       orderTotal:'15.999',  orders: [
        {
            id: 4,
            product: 'Headphones',
            total: 44.99
        }
    ]},
    {id: 4, joined:'2008-12-02',   name:'Mike',      city:'Sydney',      orderTotal:'17.999',  orders: [
        {
            id: 5,
            product: 'Headphones',
            total: 44.99
        }
    ]},
    {id: 5, joined:'2000-12-02',   name:'Mila',      city:'Melbourne',   orderTotal:'18.0',    orders: [
        {
            id: 6,
            product: 'Baseball',
            total: 9.995
        },
        {
            id: 7,
            product: 'Bat',
            total: 9.995
        }
    ]},
    {id: 6, joined:'2000-12-02',   name:'Mark',      city:'Melbourne',   orderTotal:'20.222',  orders: [
        {
            id: 8,
            product: 'Baseball',
            total: 9.995
        },
        {
            id: 9,
            product: 'Bat',
            total: 9.995
        }
    ]},
    {id: 7, joined:'1998-12-02',   name:'Dan',       city:'Darwin',      orderTotal:'10.999',  orders: [
        {
            id: 10,
            product: 'Baseball',
            total: 9.995
        },
        {
            id: 11,
            product: 'Bat',
            total: 9.995
        }
    ]},
    {id: 8, joined:'1993-12-02',   name:'Kelly',     city:'Melbourne',   orderTotal:'10.999',  orders: [
        {
            id: 12,
            product: 'Baseball',
            total: 9.995
        },
        {
            id: 13,
            product: 'Bat',
            total: 9.995
        }
    ]},
    {id: 9, joined:'1998-12-02',   name:'Mina',      city:'Melbourne',   orderTotal:'10.999',  orders: [
        {
            id: 14,
            product: 'Baseball',
            total: 9.995
        },
        {
            id: 15,
            product: 'Bat',
            total: 9.995
        }
    ]},
    {id: 10,joined:'2003-12-02',   name:'Jay',       city:'Mumbai',      orderTotal:'10.999',  orders: [
        {
            id: 16,
            product: 'Baseball',
            total: 9.995
        },
        {
            id: 17,
            product: 'Bat',
            total: 9.995
        }
    ]},
    {id: 11, joined:'2000-12-07',   name:'Ron',       city:'Melbourne',   orderTotal:'23.999',  orders: [
        {
            id: 18,
            product: 'Baseball',
            total: 9.995
        },
        {
            id: 19,
            product: 'Bat',
            total: 9.995
        }
    ]},
    {id: 12, joined:'2008-10-02',   name:'Tim',       city:'Melbourne',   orderTotal:'15.999',  orders: [
        {
            id: 20,
            product: 'Baseball',
            total: 9.995
        },
        {
            id: 21,
            product: 'Bat',
            total: 9.995
        }
    ]},
    {id: 13, joined:'2012-12-12',   name:'William',   city:'Colombo',     orderTotal:'19.999',  orders: [
        {
            id: 22,
            product: 'Baseball',
            total: 9.995
        },
        {
            id: 23,
            product: 'Bat',
            total: 9.995
        }
    ]},
    {id: 14, joined:'2012-12-12',   name:'Roshan',   city:'Colombo',     orderTotal:'19.999',  orders: [
        {
            id: 24,
            product: 'Baseball',
            total: 9.995
        },
        {
            id: 24,
            product: 'Bat',
            total: 9.995
        }
    ]},
    {id: 15, joined:'2012-12-12',   name:'Kate',   city:'Colombo',     orderTotal:'19.999',  orders: [
        {
            id: 26,
            product: 'Baseball',
            total: 9.995
        },
        {
            id: 27,
            product: 'Bat',
            total: 9.995
        }
    ]},
];