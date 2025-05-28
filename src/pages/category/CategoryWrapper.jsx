import { Link } from "react-router-dom"

function CategoryList () {
    return (
        <div className="flex flex-wrap items-center justify-center gap-8">
            <CategoryItem name="entrantes" href="/categorias/entrantes" backgroundColor="rgba(89, 135, 31, 0.29)" color="#59871f" />
            <CategoryItem name="desayuno" href="/categorias/desayuno" backgroundColor="rgba(242, 207, 102, 0.29)" color="#F2CF66" />
            <CategoryItem name="principales" href="/categorias/principales" backgroundColor="rgba(191, 168, 126, 0.29)" color="#BFA87E" />
            <CategoryItem name="postres" href="/categorias/postres" backgroundColor="rgba(140, 103, 58, 0.29)" color="#8C673A" />
            <CategoryItem name="bebidas" href="/categorias/bebidas" backgroundColor="rgba(217, 99, 30, 0.29)" color="#D9631E" />
        </div>
    )
}

function CategoryItem({ name, href, backgroundColor, color}) {
    const style = {
        backgroundColor: backgroundColor,
        color: color,
        borderColor: color,
    }
    return (
        <div>
            <Link to={href} className="rounded-full">
                <div className="uppercase px-6 py-2 text-center rounded-full" style={style}>{name}</div>
            </Link>
        </div>
    )
}

const CategoryWrapper = () => {
    return (
        <div>
            <CategoryList />
        </div>
    )
}

export default CategoryWrapper