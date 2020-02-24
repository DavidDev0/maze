from flask import Flask, jsonify
app = Flask(__name__)
app.config['DEBUG'] = True

class Square:
    def __init__(self, positionX, positionY, value):
        self.positionX = positionX
        self.positionY = positionY
        self.value = value

@app.route('/minimumSteps', methods=['GET'])
def hello_world():
    maze = [['*','-',0,0,0,'-',0,0],
                            [0,0, 0, '-',0, '-', '-',0], 
                            ['-','-',0,'-',0,0,0,0],
                            [0, 0, 0, 0, 0, '-', '-', 0],
                            [0, '-', '-', '-', 0, '-', 0, 0],
                            [0, 0, '-', '-', 0, '-' , '-', 0],
                            ['-', 0, '-', 0, 0, 0, '-', 0],
                            [0, 0, 0, 0, '-', 0, 0, 0]]

    track = []
    track.append(Square(0,0,0))
    directions = (
        (0,1),
        (1,0),
        (-1,0),
        (0,-1)
    )

    while (len(track) > 0):
        actualSquare = track.pop(0)
        for dirX, dirY in directions:
            posX = actualSquare.positionX + dirX
            posY = actualSquare.positionY + dirY
            if len(maze[0]) > posX >= 0 and len(maze) > posY >= 0 and type(maze[posY][posX]) is int:
                value = actualSquare.value + 1
                if maze[posY][posX] == 0 or maze[posY][posX] > value:          
                    track.append( Square(posX, posY, value ))
                    maze[posY ][posX] = value
    response = jsonify({'maze': maze})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
app.run(host='0.0.0.0')
