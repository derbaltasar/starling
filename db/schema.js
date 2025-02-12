const dbSchema = `CREATE TABLE IF NOT EXISTS CONTENT (
	ID INTEGER PRIMARY KEY AUTOINCREMENT,
	CID VARCHAR,
	NAME VARCHAR,
	SIZE VARCHAR,
	SIZE_BYTES BIGINT,
	MINER_ID VARCHAR,
	DEAL_DATE DATETIME,
	DEAL_ID VARCHAR,
	COMMP_ORIGINAL VARCHAR,
	DATE_LAST_CHECK DATETIME,
	COMMP_LATEST VARCHAR,
	VERIFY_RESULT VARCHAR,
	STATE VARCHAR,
	STATUS VARCHAR,
	NUMBER_OF_COPIES INT,
	DATETIME_STARTED DATETIME
);`;

module.exports = {
  dbSchema
};
