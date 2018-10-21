"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
app.use(body_parser_1.default.json());
var Course = /** @class */ (function () {
    function Course(id, courseName, images, task, person) {
        this.id = id;
        this.courseName = courseName;
        this.images = images;
        this.task = task;
        this.person = person;
    }
    return Course;
}());
exports.Course = Course;
var courses = [
    new Course(1, 'javascript', "http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130", 10, 90),
    new Course(2, '混合应用', "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130", 23, 100),
    new Course(3, '测试', "http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130", 15, 97),
    new Course(4, '计算机导论', "http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130", 30, 99),
    new Course(4, '计算机导论', "http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130", 30, 99)
];
// app.get('/api',(req,res)=>{
//     res.json(courses);
// });
app.get('/api/courses', function (req, res) {
    res.json(courses);
});
app.get('/api/courses/:id', function (req, res) {
    res.json(courses.find(function (ele) { return ele.id == req.params.id; }));
});
app.post('/api', function (req, res) {
    console.log(req.body);
    res.json(courses);
});
app.listen(8000);
