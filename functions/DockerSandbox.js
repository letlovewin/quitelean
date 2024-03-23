/*

    @File: DockerSandbox.js
    @Author: Gray
    @Created: 3/22/24

*/

let Sandbox = function (timeout_value, path, folder, vm_name, file_name, code, output_command, e_arguments) {
    this.timeout_value = timeout_value;
    this.path = path;
    this.folder = folder;
    this.vm_name = vm_name;
    this.file_name = file_name;
    this.code = code;
    this.output_command = output_command;
    this.e_arguments = e_arguments;
}

Sandbox.prototype.run = function (success) {
    let sandbox = this;

    this.prepare(function () {
        sandbox.execute(success);
    })
}

Sandbox.prototype.prepare = function (success) {
    let exec = require('child_process').exec;
    let fs = require('fs');
    let sandbox = this;

    exec(`docker run -v ${this.path}${this.folder} leanvj`)
}