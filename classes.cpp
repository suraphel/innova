//C++

#include <iostream>


//Making the class 

class Box {
    public: 

// Making the constructor inside the class 
      
    Box(double m_length,double m_width, double m_height){
        double length = m_length;
        double width = m_width;
        double hight = m_height;
       }


    explicit Box() = default ;  // so we can use the default values and object making :=> Box mybox; explicit for argument intaker
    Box(double m_length,double m_width, double m_height);
    double area();
    double volume();

//Making the methods inside the class
    // double area(){
    //     return length * width; 
    // }
    // double volume(){
    //     return length * width * hight;
    // }

    private:
    double length{};
    double width{};
    double height{};

};

    //making the constructor outside the class

    Box::Box(double m_length,double m_width, double m_height){
        double length = m_length;
        double width = m_width;
        double height = m_height;
       }
       //Making the methods outside the class
    double area(){
        return length * width; 
    }
    double volume(){
        return m_length * m_width * m_height;
    }

    //Making consturctor init

    Box::Box(double m_length,double m_width, double m_height):
    length {m_length}, width {m_width}, height{m_height}
    {
        std::cout << "Here is the constructor initalizer" <<std::endl;
    }


class Cube {
public : 
    explicit Cube(double side);
    double volume();
    bool isbigger(Cube cube);// take a cube as an arrgument
private: 
    double m_side;
};

Cube::Cube(double side): m_side { side }
{
    std::cout << "Constructor call " << std::endl; 
}

double Cube::volume (){
    return m_side * m_side * m_side; 
}

bool Cube::isbigger(Cube cube){

    return volume() < cube.volume();
}




int main (){
    //Making the object 
Box mybox(5, 7, 10); 

// Making the object 
Box mybox; // we need a default constructor to make use of this. 

std::cout << "The area is : " << mybox.area() << std::endl; 

}



