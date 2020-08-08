FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS builder
WORKDIR /source
COPY . .

# restore for all projects
RUN dotnet restore BackEnd.sln
# test
# use the label to identity this layer later
LABEL test=true
# install the report generator tool
RUN dotnet tool install dotnet-reportgenerator-globaltool --version 4.5.8 --tool-path /tools
# run the test and collect code coverage (requires coverlet.msbuild to be added to test project)
RUN dotnet publish BackEnd.sln \
    --output /app/ --configuration Debug

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /app
COPY --from=builder /app .
ENV ASPNETCORE_ENVIRONMENT=Development \
    ASPNETCORE_URLS=http://+:80
ENTRYPOINT ["dotnet", "BackEnd.dll"]