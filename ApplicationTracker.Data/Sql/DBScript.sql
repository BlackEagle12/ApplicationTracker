USE [master]
GO
/****** Object:  Database [ApplicationTracker]    Script Date: 7/9/2024 12:32:32 AM ******/
CREATE DATABASE [ApplicationTracker]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ApplicationTracker', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\ApplicationTracker.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ApplicationTracker_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\ApplicationTracker_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [ApplicationTracker] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ApplicationTracker].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ApplicationTracker] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ApplicationTracker] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ApplicationTracker] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ApplicationTracker] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ApplicationTracker] SET ARITHABORT OFF 
GO
ALTER DATABASE [ApplicationTracker] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ApplicationTracker] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ApplicationTracker] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ApplicationTracker] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ApplicationTracker] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ApplicationTracker] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ApplicationTracker] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ApplicationTracker] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ApplicationTracker] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ApplicationTracker] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ApplicationTracker] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ApplicationTracker] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ApplicationTracker] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ApplicationTracker] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ApplicationTracker] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ApplicationTracker] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ApplicationTracker] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ApplicationTracker] SET RECOVERY FULL 
GO
ALTER DATABASE [ApplicationTracker] SET  MULTI_USER 
GO
ALTER DATABASE [ApplicationTracker] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ApplicationTracker] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ApplicationTracker] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ApplicationTracker] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ApplicationTracker] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [ApplicationTracker] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'ApplicationTracker', N'ON'
GO
ALTER DATABASE [ApplicationTracker] SET QUERY_STORE = ON
GO
ALTER DATABASE [ApplicationTracker] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [ApplicationTracker]
GO
/****** Object:  Table [dbo].[USERS]    Script Date: 7/9/2024 12:32:33 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[USERS](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Email] [varchar](100) NOT NULL,
	[Password] [varchar](25) NULL,
	[First Name] [varchar](100) NULL,
	[Last Name] [varchar](100) NULL,
	[Temp Token] [varchar](100) NULL,
	[Is Verified] [bit] NOT NULL,
	[Added On] [datetime2](7) NOT NULL,
	[Last Updated On] [datetime2](7) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[Email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[USERS] ADD  DEFAULT ((0)) FOR [Is Verified]
GO
USE [master]
GO
ALTER DATABASE [ApplicationTracker] SET  READ_WRITE 
GO

CREATE TABLE [RefEnumType]
(
	[Id] INT PRIMARY KEY IDENTITY(1,1),
	[Enum Type] VARCHAR(100) NOT NULL UNIQUE,
	[Description] VARCHAR(1000),
	[Added On] DATETIME NOT NULL,
    [Last Updated On] DATETIME 
)

INSERT INTO [RefEnumType] 
	([Enum Type], [Description], [Added On], [Last Updated On])
VALUES
	('SearchType', 'Type of search we are trying to perform in LinkedIn', GETDATE(), GETDATE()), 
	('DatePosted', 'Date filter for job search in LinkedIn', GETDATE(), GETDATE()), 
	('ExperienceLavel', 'Date filter for job search in LinkedIn', GETDATE(), GETDATE()), 
	('Remote', 'Remote option filter for job search in LinkedIn', GETDATE(), GETDATE()), 
	('JobType', 'Job type filter for job search in LinkedIn', GETDATE(), GETDATE()), 
	('Industry', 'Industry type filter for job search in LinkedIn(Recomanded to be null for job search)', GETDATE(), GETDATE()), 
	('JobFunction', 'job function type filter for job search in LinkedIn(Recomanded to be null for job search)', GETDATE(), GETDATE()), 
	('JobTitle', 'job title filter for job search in LinkedIn(Recomanded to be null for job search)', GETDATE(), GETDATE()), 
	('Benifits', 'Benifits filter for job search in LinkedIn(Recomanded to be null for job search)', GETDATE(), GETDATE()), 
	('Commitments', 'Commitments filter for job search in LinkedIn(Recomanded to be null for job search)', GETDATE(), GETDATE())

CREATE TABLE [RefEnumValue]
(
	[Id] INT PRIMARY KEY IDENTITY(1,1),
	[Enum Type Id] VARCHAR(100) NOT NULL,
	[Enum Value] VARCHAR(100) NOT NULL UNIQUE,
	[Description] VARCHAR(1000),
	[Added On] DATETIME NOT NULL,
    [Last Updated On] DATETIME 
)

