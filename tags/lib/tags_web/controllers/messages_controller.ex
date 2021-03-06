defmodule TagsWeb.MessagesController do
  use TagsWeb, :controller

  alias Tags.Messages.Create
  alias Tags.Message

  def create(conn, params) do
    params
    |> Create.call()
    |> handle_create(conn)
  end

  defp handle_create({:ok, %Message{} = message}, conn) do
    conn
    |> put_status(:created)
    |> render("create.json", message: message)
  end

  defp handle_create({:error, %{result: result, status: status}}, conn) do
    conn
    |> put_status(status)
    |> put_view(TagsWeb.ErrorView)
    |> render("error.json", result: result)
  end
end
