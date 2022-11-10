import { useState } from "react"
import { Button, Form } from "react-bootstrap"

function AddFood({ foods, setFoods }) {
    const [form, setForm] = useState({
        name: "",
        calories: "",
        image: "",
        servings: ""
    })

    const handleChange = (e) => {
        // evento que a cada mudança ele vai capturar o nome (name) do meu input
            // e através desse nome ele captura o valor (value) deste input
        
        // um novo objeto -> um novo item
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // uma atualização da lista -> array inteiro
        setFoods([...foods, form])

        setForm({
            name: "",
            calories: "",
            image: "",
            servings: ""
        })
    }

    return (
        <Form onSubmit={ handleSubmit }>
            <Form.Group className="mb-3">
                <Form.Label>Nome do prato</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Insira o nome do prato"
                    name="name"
                    onChange={ handleChange }
                    value={ form.name }
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Imagem do prato</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Insira o link contendo a imagem do prato"
                    // https://img.cybercook.com.br/receitas/147/pipoca-2-840x480.jpeg?q=75 (imagem de teste)
                    name="image"
                    onChange={ handleChange }
                    value={ form.image }
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Calorias do prato</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Insira a quantidade de calorias por porção do prato"
                    name="calories"
                    onChange={ handleChange }
                    value={ form.calories }
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Quantidade de porções</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Insira a quantidade de porções"
                    name="servings"
                    onChange={ handleChange }
                    value={ form.servings }
                />
            </Form.Group>
            <Button className="mb-3" variant="primary" type="submit">
                Cadastrar
            </Button>
        </Form>
    )
}

export default AddFood