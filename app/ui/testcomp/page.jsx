import useSWR from "swr";
import fetcher from "@/app/lib/fetcher";


const Projectstest = () => {
    const { data, error } = useSWR('../../api/test/route', fetcher)
    const numFollowers = data?.numFollowers
    return (
        <div>
            <Card>
                <Card.Title>Followers</Card.Title>
                <Card.Text>{numFollowers}</Card.Text>
            </Card>
        </div>
    )
}

// export default 