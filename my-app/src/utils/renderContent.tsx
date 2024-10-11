import Loading from "../components/ui/Loading/Loading";

export const renderContent = (isLoading: boolean, isError: any) => {
    if (isLoading) {
        return <Loading />;
    }
    if (isError) {
        return <div>Произошла ошибка!</div>;
    }

    return null;
};