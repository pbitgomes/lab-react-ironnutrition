import { Button, Card } from "react-bootstrap"

// componente responsável por um card
function FoodBox({ food, deleteFood }) {
    return (
        <Card style={{ width: '18rem', margin: 10 }}>
                <Card.Header>{ food.name }</Card.Header>
            <Card.Body>
                <Card.Img variant="top" style={{ width: 230, height: 140, margin: 10 }} src={ food.image} />
                <Card.Text>Calories: { food.calories }</Card.Text>
                <Card.Text>Servings: { food.servings }</Card.Text>
                <Card.Text>Total of calories: { food.calories * food.servings } kcal</Card.Text>
                <Button variant="danger" onClick={ () => deleteFood(food.name) }>Excluir a refeição</Button>
            </Card.Body>
        </Card>
    )
}

export default FoodBox