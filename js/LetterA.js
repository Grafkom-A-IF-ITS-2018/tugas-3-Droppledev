
class LetterA extends Object3D {
    constructor() {
        super()
        this.type = 'obj';
        this.vertices = [
            // Front face left
            -0.2, 1.0, 0.3,
            -1.1, -1.3, 0.3,
            -0.7, -1.3, 0.3,
            0.2, 1.0, 0.3,
            // Front face right
            0.2, 1.0, 0.3,
            0.0, 0.5, 0.3,
            0.7, -1.3, 0.3,
            1.1, -1.3, 0.3,
            // Front face middle
            -0.3, -0.2, 0.3,
            0.3, -0.2, 0.3,
            0.45, -0.6, 0.3,
            -0.45, -0.6, 0.3,
            // back face left
            -0.2, 1.0, -0.3,
            -1.1, -1.3, -0.3,
            -0.7, -1.3, -0.3,
            0.2, 1.0, -0.3,
            // back face right
            0.2, 1.0, -0.3,
            0.0, 0.5, -0.3,
            0.7, -1.3, -0.3,
            1.1, -1.3, -0.3,
            // back face middle
            -0.3, -0.2, -0.3,
            0.3, -0.2, -0.3,
            0.45, -0.6, -0.3,
            -0.45, -0.6, -0.3,
            // bottom middle
            0.45, -0.6, -0.3,
            0.45, -0.6, 0.3,
            -0.45, -0.6, 0.3,
            -0.45, -0.6, -0.3,
            // bottom middle upper
            0.3, -0.2, -0.3,
            0.3, -0.2, 0.3,
            -0.3, -0.2, 0.3,
            -0.3, -0.2, -0.3,
            // top upper
            0.2, 1.0, -0.3,
            0.2, 1.0, 0.3,
            -0.2, 1.0, 0.3,
            -0.2, 1.0, -0.3,
            // left outer
            -0.2, 1.0, -0.3,
            -0.2, 1.0, 0.3,
            -1.1, -1.3, 0.3,
            -1.1, -1.3, -0.3,
            // left inner
            -0, 0.5, -0.3,
            -0, 0.5, 0.3,
            -0.7, -1.3, 0.3,
            -0.7, -1.3, -0.3,
            // right outer
            0.2, 1.0, -0.3,
            0.2, 1.0, 0.3,
            1.1, -1.3, 0.3,
            1.1, -1.3, -0.3,
            // right inner
            0, 0.5, -0.3,
            0, 0.5, 0.3,
            0.7, -1.3, 0.3,
            0.7, -1.3, -0.3,
            // bottom left bottom
            -0.7, -1.3, -0.3,
            -0.7, -1.3, 0.3,
            -1.1, -1.3, 0.3,
            -1.1, -1.3, -0.3,
            // bottom right bottoom
            0.7, -1.3, -0.3,
            0.7, -1.3, 0.3,
            1.1, -1.3, 0.3,
            1.1, -1.3, -0.3
        ];
        this.indices = [
            0, 1, 2, 0, 2, 3,
            4, 5, 6, 4, 6, 7,
            8, 9, 10, 8, 10, 11,
            12, 13, 14, 12, 14, 15,
            16, 17, 18, 16, 18, 19,
            20, 21, 22, 20, 22, 23,
            24, 25, 26, 24, 26, 27,
            28, 29, 30, 28, 30, 31,
            32, 33, 34, 32, 34, 35,
            36, 37, 38, 36, 38, 39,
            40, 41, 42, 40, 42, 43,
            44, 45, 46, 44, 46, 47,
            48, 49, 50, 48, 50, 51,
            52, 53, 54, 52, 54, 55,
            56, 57, 58, 56, 58, 59 // bottom right
        ];
        this.position = [
            // Front face left
            [-0.2, 1.0, 0.3, 1],
            [-1.1, -1.3, 0.3, 1],
            [-0.7, -1.3, 0.3, 1],
            [0.2, 1.0, 0.3, 1],
            // Front face right
            [0.2, 1.0, 0.3, 1],
            [0.0, 0.5, 0.3, 1],
            [0.7, -1.3, 0.3, 1],
            [1.1, -1.3, 0.3, 1],
            // Front face middle
            [-0.3, -0.2, 0.3, 1],
            [0.3, -0.2, 0.3, 1],
            [0.45, -0.6, 0.3, 1],
            [-0.45, -0.6, 0.3, 1],
            // back face left
            [-0.2, 1.0, -0.3, 1],
            [-1.1, -1.3, -0.3, 1],
            [-0.7, -1.3, -0.3, 1],
            [0.2, 1.0, -0.3, 1],
            // back face right
            [0.2, 1.0, -0.3, 1],
            [0.0, 0.5, -0.3, 1],
            [0.7, -1.3, -0.3, 1],
            [1.1, -1.3, -0.3, 1],
            // back face middle
            [-0.3, -0.2, -0.3, 1],
            [0.3, -0.2, -0.3, 1],
            [0.45, -0.6, -0.3, 1],
            [-0.45, -0.6, -0.3, 1],
            // bottom middle
            [0.45, -0.6, -0.3, 1],
            [0.45, -0.6, 0.3, 1],
            [-0.45, -0.6, 0.3, 1],
            [-0.45, -0.6, -0.3, 1],
            // bottom middle upper
            [0.3, -0.2, -0.3, 1],
            [0.3, -0.2, 0.3, 1],
            [-0.3, -0.2, 0.3, 1],
            [-0.3, -0.2, -0.3, 1],
            // top upper
            [0.2, 1.0, -0.3, 1],
            [0.2, 1.0, 0.3, 1],
            [-0.2, 1.0, 0.3, 1],
            [-0.2, 1.0, -0.3, 1],
            // left outer
            [-0.2, 1.0, -0.3, 1],
            [-0.2, 1.0, 0.3, 1],
            [-1.1, -1.3, 0.3, 1],
            [-1.1, -1.3, -0.3, 1],
            // left inner
            [-0, 0.5, -0.3, 1],
            [-0, 0.5, 0.3, 1],
            [-0.7, -1.3, 0.3, 1],
            [-0.7, -1.3, -0.3, 1],
            // right outer
            [0.2, 1.0, -0.3, 1],
            [0.2, 1.0, 0.3, 1],
            [1.1, -1.3, 0.3, 1],
            [1.1, -1.3, -0.3, 1],
            // right inner
            [0, 0.5, -0.3, 1],
            [0, 0.5, 0.3, 1],
            [0.7, -1.3, 0.3, 1],
            [0.7, -1.3, -0.3, 1],
            // bottom left bottom
            [-0.7, -1.3, -0.3, 1],
            [-0.7, -1.3, 0.3, 1],
            [-1.1, -1.3, 0.3, 1],
            [-1.1, -1.3, -0.3, 1],
            // bottom right bottoom
            [0.7, -1.3, -0.3, 1],
            [0.7, -1.3, 0.3, 1],
            [1.1, -1.3, 0.3, 1],
            [1.1, -1.3, -0.3, 1],
        ];
        this.vertices_ = Object.assign([], this.position);
        this.normals = [];
        this.textureCoord = [];

        for (let i = 0; i < this.vertices.length / 3; i++) {
            this.textureCoord.push(0.0, 0.0);
        }
        for (let i = 0; i < this.vertices.length / 6; i++) {
            this.normals.push(0.0, 0.0, 1.0);
        }
        for (let i = 0; i < this.vertices.length / 6; i++) {
            this.normals.push(0.0, 1.0, 0.0);
        }
        let clr = [
            [0.129, 0.588, 0.953, 1.0],
            [0.129, 0.588, 0.953, 1.0],
            [0.129, 0.588, 0.953, 1.0],
            [0.129, 0.588, 0.953, 1.0],
            [0.129, 0.588, 0.953, 1.0],
            [0.129, 0.588, 0.953, 1.0],
            [0.092, 0.396, 0.753, 1.0],
            [0.565, 0.792, 0.976, 1.0],
            [0.092, 0.396, 0.753, 1.0],
            [0.098, 0.463, 0.824, 1.0],
            [0.098, 0.463, 0.824, 1.0],
            [0.098, 0.463, 0.824, 1.0],
            [0.098, 0.463, 0.824, 1.0],
            [0.092, 0.396, 0.753, 1.0],
            [0.092, 0.396, 0.753, 1.0],
        ];
        this.colors = [];
        for (let i in clr) {
            let temp = clr[i];
            for (let j = 0; j < 4; j++) {
                this.colors = this.colors.concat(temp);
            }
        }
        this.textureSrc = undefined;
    }
    render() {
        this.temporaryMatrixWorld = Object.assign({}, this.matrixWorld);
        document.addEventListener(this.id, this.action.bind(this));
    }
    getCenter() {
        let center = [0, 0, 0];
        for (let i = 0; i < this.position.length / 2; i++) {
            center[0] += this.position[i][0];
            center[1] += this.position[i][1];
            center[2] += this.position[i][2];
        }
        center[0] /= this.position.length / 2;
        center[1] /= this.position.length / 2;
        center[2] /= this.position.length / 2;
        return center;
    }
    action() {
    }
}

LetterA.prototype.constructor = LetterA;



