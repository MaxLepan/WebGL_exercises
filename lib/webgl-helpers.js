/*
 * Copyright 2018, Yann Gilquin
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/*
 * A class with helpers to ease WebGL API access
 */
class WebGLHelpers
{
    /*
     * Get vertex attribute location
     * Throw an exception if not found
     * @param program - program where the attribute is located
     * @param name - attribute name
     */
    static getAttributeLocation(program, name)
    {
        let attribute = gl.getAttribLocation(program, name)
        if (attribute < 0)
        {
            throw "Error while accessing attribute " + name
        }

        return attribute
    }

    /*
     * Get shader uniform location
     * Throw an exception if not found
     * @param program - program where the uniform is located
     * @param name - uniform name
     */
    static getUniformLocation(program, name)
    {
        let uniform = gl.getUniformLocation(program, name);
        if (uniform === null)
        {
            // throw "Error while accessing uniform " + name;
        }

        return uniform
    }

    /*
     * Check if a number is a power of two
     */
    static isPowerOfTwo(x)
    {
        return (Math.log(x) / Math.log(2)) % 1 === 0;
    }
}

getAttributeLocation = WebGLHelpers.getAttributeLocation
getUniformLocation = WebGLHelpers.getUniformLocation
isPowerOfTwo = WebGLHelpers.isPowerOfTwo

/*
 * A class to handle 2D points and vectors
 */
class Vector2D
{
    constructor(x, y)
    {
        this.x = typeof x === "number" ? x : 0
        this.y = typeof y === "number" ? y : 0
    }

    /*
     * Set a point from polar coordinates
     * Return this
     */
    setFromPolar(radius, angle)
    {
        this.x = radius * Math.cos(angle)
        this.y = radius * Math.sin(angle)
        return this
    }

    distanceTo(point)
    {
        let dx = point.x - this.x
        let dy = point.y - this.y
        return Math.sqrt(dx * dx + dy * dy)
    }
}

class Color
{
    constructor(r, g, b)
    {
        if (r instanceof Color)
        {
            this.color = r
        }
        else if (Array.isArray(r))
        {
            this.color = new Color(r[0], r[1], r[2])
        }
        else 
        {
            this.r = typeof r === "number" ? r : 0
            this.g = typeof g === "number" ? g : 0
            this.b = typeof b === "number" ? b : 0
        }
    }

    /*
     * Convert to garyscale
     * Use luminosity method (human perception)
     * 0.21 R + 0.72 G + 0.07 B
     */
    grayscale()
    {
        let gray = 0.21 * this.r + 0.72 * this.g + 0.07 * this.b
        this.r = this.g = this.b = gray
        
        return this
    }

    random()
    {
        this.r = Math.random()
        this.g = Math.random()
        this.b = Math.random()

        return this
    }

    static fromHex(hex)
    {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (result === null)
        {
            return null
        }

        return new Color(parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255)
    }
}

class Transform
{
    constructor(position, rotation, scale)
    {
        this.position = position || null
        this.rotation = rotation || null
        this.scale = scale || null

        this.matrix = null
    }

    computeMatrix()
    {

    }
}