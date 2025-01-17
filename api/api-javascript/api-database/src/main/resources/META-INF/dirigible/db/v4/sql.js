/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company and Eclipse Dirigible contributors
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-FileCopyrightText: 2021 SAP SE or an SAP affiliate company and Eclipse Dirigible contributors
 * SPDX-License-Identifier: EPL-2.0
 */
/**
 * API v4 SQL
 * 
 * Note: This module is supported only with the Mozilla Rhino engine
 */

var database = require('db/v4/database');

exports.getDialect = function(connection) {
	/**
	 * Dialect object
	 */
	var Dialect = function() {
		
		var _parameters = [];
		
		var parameters = function(){
			return _parameters;
		};
		
		var build = function() {
			return this.native.build();
		};
		
		this.select = function() {
			
			/**
			 * Select object
			 */
			var Select = function() {
				
				this.distinct = function() {
					this.native.distinct();
					return this;
				};
				
				this.forUpdate = function() {
					this.native.forUpdate();
					return this;
				};
				
				this.column = function(column) {
					this.native.column(column);
					return this;
				};
				
				this.from = function(table, alias) {
					if (alias !== undefined) {
						this.native.from(table, alias);
					} else {
						this.native.from(table);
					}
					return this;
				};
				
				this.join = function(table, on, alias) {
					if (alias !== undefined) {
						this.native.join(table, on, alias);
						if(arguments.length>3){
							if(Array.isArray(arguments[3]))
								_parameters = _parameters.concat([arguments[3]]);
							else
								_parameters.push(arguments[3]);
						}
					} else {
						this.native.join(table, on);
						if(arguments.length>2){
							if(Array.isArray(arguments[2]))
								_parameters = _parameters.concat([arguments[2]]);
							else
								_parameters.push(arguments[2]);
						}
					}
					return this;
				};
				
				this.innerJoin = function(table, on, alias) {
					if (alias !== undefined) {
						this.native.innerJoin(table, on, alias);
						if(arguments.length>3){
							if(Array.isArray(arguments[3]))
								_parameters = _parameters.concat(arguments[3]);
							else
								_parameters.push(arguments[3]);
						}
					} else {
						this.native.innerJoin(table, on);
						if(arguments.length>2){
							if(Array.isArray(arguments[2]))
								_parameters = _parameters.concat(arguments[2]);
							else
								_parameters.push(arguments[2]);
						}
					}
					return this;
				};
				
				this.outerJoin = function(table, on, alias) {
					if (alias !== undefined) {
						this.native.outerJoin(table, on, alias);
						if(arguments.length>3){
							if(Array.isArray(arguments[3]))
								_parameters = _parameters.concat(arguments[3]);
							else
								_parameters.push(arguments[3]);
						}
					} else {
						this.native.outerJoin(table, on);
						if(arguments.length>2){
							if(Array.isArray(arguments[2]))
								_parameters = _parameters.concat(arguments[2]);
							else
								_parameters.push(arguments[2]);
						}
					}
					return this;
				};
				
				this.leftJoin = function(table, on, alias) {
					if (alias !== undefined) {
						this.native.leftJoin(table, on, alias);
						if(arguments.length>3){
							if(Array.isArray(arguments[3]))
								_parameters = _parameters.concat(arguments[3]);
							else
								_parameters.push(arguments[3]);
						}
					} else {
						this.native.leftJoin(table, on);
						if(arguments.length>2){
							if(Array.isArray(arguments[2]))
								_parameters = _parameters.concat(arguments[2]);
							else
								_parameters.push(arguments[2]);
						}
					}
					return this;
				};
				
				this.rightJoin = function(table, on, alias) {
					if (alias !== undefined) {
						this.native.rightJoin(table, on, alias);
						if(arguments.length>3){
							if(Array.isArray(arguments[3]))
								_parameters = _parameters.concat(arguments[3]);
							else
								_parameters.push(arguments[3]);
						}
					} else {
						this.native.rightJoin(table, on);
						if(arguments.length>2){
							if(Array.isArray(arguments[2]))
								_parameters = _parameters.concat(arguments[2]);
							else
								_parameters.push(arguments[2]);
						}
					}
					return this;
				};
				
				this.fullJoin = function(table, on, alias) {
					if (alias !== undefined) {
						this.native.fullJoin(table, on, alias);
						if(arguments.length>3){
							if(Array.isArray(arguments[3]))
								_parameters = _parameters.concat(arguments[3]);
							else
								_parameters.push(arguments[3]);
						}
					} else {
						this.native.fullJoin(table, on);
						if(arguments.length>2){
							if(Array.isArray(arguments[2]))
								_parameters = _parameters.concat(arguments[2]);
							else
								_parameters.push(arguments[2]);
						}
					}
					return this;
				};
				
				this.where = function(condition) {
					this.native.where(condition);
					if(arguments.length>1){
						if(Array.isArray(arguments[1]))
							_parameters = _parameters.concat(arguments[1]);
						else
							_parameters.push(arguments[1]);
					}
					return this;
				};
				
				this.order = function(column, asc) {
					if (asc !== undefined) {
						this.native.order(column, asc);
					} else {
						this.native.order(column);
					}
					return this;
				};
				
				this.group = function(column) {
					this.native.group(column);
					return this;
				};
				
				this.limit = function(limit) {
					this.native.limit(limit);
					return this;
				};
				
				this.offset = function(offset) {
					this.native.offset(offset);
					return this;
				};
				
				this.having = function(having) {
					this.native.having(having);
					return this;
				};

				this.union = function(select) {
					this.native.union(select);
					return this;
				};

				this.build = build.bind(this);

				this.parameters = parameters.bind(this);

			}
			
			
			_parameters = [];
			var select = new Select();
			var native = this.native.select();
			select.native = native;
			return select;
		};
		
		this.insert = function() {
			
			/**
			 * Insert object
			 */
			var Insert = function() {
				
				this.into = function(table) {
					this.native.into(table);
					return this;
				};
				
				this.column = function(column) {
					this.native.column(column);
					return this;
				};
				
				this.value = function(value) {
					this.native.value(value);
					if(arguments.length>1){
						if(Array.isArray(arguments[1]))
							_parameters = _parameters.concat(arguments[1]);
						else
							_parameters.push(arguments[1]);
					}
					return this;
				};
				
				this.select = function(select) {
					this.native.select(select);
					return this;
				};

				this.build = build.bind(this);
				
				this.parameters = parameters.bind(this);

			};

			_parameters = [];
			var insert = new Insert();
			var native = this.native.insert();
			insert.native = native;
			return insert;
		};
	
		this.update = function() {
			
			/**
			 * Update object
			 */
			var Update = function() {
				
				this.table = function(table) {
					this.native.table(table);
					return this;
				};
				
				this.set = function(column, value) {
					this.native.set(column, value);
					if(arguments.length>2){
						if(Array.isArray(arguments[2]))
							_parameters = _parameters.concat(arguments[2]);
						else
							_parameters.push(arguments[2]);
					}
					return this;
				};
				
				this.where = function(condition) {
					this.native.where(condition);
					if(arguments.length>1){
						if(Array.isArray(arguments[1]))
							_parameters = _parameters.concat(arguments[1]);
						else
							_parameters.push(arguments[1]);
					}
					return this;
				};
				
				this.build = build.bind(this);
				this.parameters = parameters.bind(this);
			};
			
			_parameters = [];
			var update = new Update();
			var native = this.native.update();
			update.native = native;
			return update;
		};
	
		this.delete = function() {
			
			/**
			 * Delete object
			 */
			var Delete = function() {
				
				this.from = function(table) {
					this.native.from(table);
					return this;
				};
				
				this.where = function(condition) {
					this.native.where(condition);
					if(arguments.length>1){
						if(Array.isArray(arguments[1]))
							_parameters = _parameters.concat(arguments[1]);
						else
							_parameters.push(arguments[1]);
					}
					return this;
				};
				
				this.build = build.bind(this);
				this.parameters = parameters.bind(this);
			}
			
			_parameters = [];
			var deleteRows = new Delete();
			var native = this.native.delete();
			deleteRows.native = native;
			return deleteRows;
		};
		
		
		this.nextval = function(name) {
			
			/**
			 * Nextval object
			 */
			var Nextval = function(name) {
				this.name = name;
				this.build = build.bind(this);
			}
			
			var nextval = new Nextval();
			var native = this.native.nextval(name);
			nextval.native = native;
			return nextval;
		};
		
		this.create = function() {
			
			/**
			 * Create object
			 */
			var Create = function() {
				
				this.table = function(table) {
					/**
					 * CreateTable object
					 */
					var CreateTable = function() {
						
						this.column = function(column, type, isPrimaryKey, isNullable, isUnique, args) {
							if (args !== undefined) {
								this.native.column(column, type, isPrimaryKey, isNullable, isUnique, args);	
							} else {
								if (isUnique) {
									this.native.column(column, type, isPrimaryKey, isNullable, isUnique);
								} else {
									if (isNullable) {
										this.native.column(column, type, isPrimaryKey, isNullable);
									} else {
										if (isPrimaryKey) {
											this.native.column(column, type, isPrimaryKey);
										} else {
											this.native.column(column, type);
										}
									}
								}
							}
							
							return this;
						};
						
						this.columnVarchar = function(column, length, isPrimaryKey, isNullable, isUnique, args) {
							if (args !== undefined) {
								this.native.columnVarchar(column, length, isPrimaryKey, isNullable, isUnique, args);	
							} else {
								if (isUnique) {
									this.native.columnVarchar(column, length, isPrimaryKey, isNullable, isUnique);
								} else {
									if (isNullable) {
										this.native.columnVarchar(column, length, isPrimaryKey, isNullable);
									} else {
										if (isPrimaryKey) {
											this.native.columnVarchar(column, length, isPrimaryKey);
										} else {
											this.native.columnVarchar(column, length);
										}
									}
								}
							}
							
							return this;
						};
						
						this.columnChar = function(column, length, isPrimaryKey, isNullable, isUnique, args) {
							if (args !== undefined) {
								this.native.columnChar(column, length, isPrimaryKey, isNullable, isUnique, args);	
							} else {
								if (isUnique) {
									this.native.columnChar(column, length, isPrimaryKey, isNullable, isUnique);
								} else {
									if (isNullable) {
										this.native.columnChar(column, length, isPrimaryKey, isNullable);
									} else {
										if (isPrimaryKey) {
											this.native.columnChar(column, length, isPrimaryKey);
										} else {
											this.native.columnChar(column, length);
										}
									}
								}
							}
							
							return this;
						};
						
						this.columnDate = function(column, isPrimaryKey, isNullable, isUnique, args) {
							if (args !== undefined) {
								this.native.columnDate(column, isPrimaryKey, isNullable, isUnique, args);	
							} else {
								if (isUnique) {
									this.native.columnDate(column, isPrimaryKey, isNullable, isUnique);
								} else {
									if (isNullable) {
										this.native.columnDate(column, isPrimaryKey, isNullable);
									} else {
										if (isPrimaryKey) {
											this.native.columnDate(column, isPrimaryKey);
										} else {
											this.native.columnDate(column);
										}
									}
								}
							}
							
							return this;
						};
						
						this.columnTime = function(column, isPrimaryKey, isNullable, isUnique, args) {
							if (args !== undefined) {
								this.native.columnTime(column, isPrimaryKey, isNullable, isUnique, args);	
							} else {
								if (isUnique) {
									this.native.columnTime(column, isPrimaryKey, isNullable, isUnique);
								} else {
									if (isNullable) {
										this.native.columnTime(column, isPrimaryKey, isNullable);
									} else {
										if (isPrimaryKey) {
											this.native.columnTime(column, isPrimaryKey);
										} else {
											this.native.columnTime(column);
										}
									}
								}
							}
							
							return this;
						};
						
						this.columnTimestamp = function(column, isPrimaryKey, isNullable, isUnique, args) {
							if (args !== undefined) {
								this.native.columnTimestamp(column, isPrimaryKey, isNullable, isUnique, args);	
							} else {
								if (isUnique) {
									this.native.columnTimestamp(column, isPrimaryKey, isNullable, isUnique);
								} else {
									if (isNullable) {
										this.native.columnTimestamp(column, isPrimaryKey, isNullable);
									} else {
										if (isPrimaryKey) {
											this.native.columnTimestamp(column, isPrimaryKey);
										} else {
											this.native.columnTimestamp(column);
										}
									}
								}
							}
							
							return this;
						};
						
						this.columnInteger = function(column, isPrimaryKey, isNullable, isUnique, args) {
							if (args !== undefined) {
								this.native.columnInteger(column, isPrimaryKey, isNullable, isUnique, args);	
							} else {
								if (isUnique) {
									this.native.columnInteger(column, isPrimaryKey, isNullable, isUnique);
								} else {
									if (isNullable) {
										this.native.columnInteger(column, isPrimaryKey, isNullable);
									} else {
										if (isPrimaryKey) {
											this.native.columnInteger(column, isPrimaryKey);
										} else {
											this.native.columnInteger(column);
										}
									}
								}
							}
							
							return this;
						};
						
						this.columnTinyint = function(column, isPrimaryKey, isNullable, isUnique, args) {
							if (args !== undefined) {
								this.native.columnTinyint(column, isPrimaryKey, isNullable, isUnique, args);	
							} else {
								if (isUnique) {
									this.native.columnTinyint(column, isPrimaryKey, isNullable, isUnique);
								} else {
									if (isNullable) {
										this.native.columnTinyint(column, isPrimaryKey, isNullable);
									} else {
										if (isPrimaryKey) {
											this.native.columnTinyint(column, isPrimaryKey);
										} else {
											this.native.columnTinyint(column);
										}
									}
								}
							}
							
							return this;
						};
						
						this.columnBigint = function(column, isPrimaryKey, isNullable, isUnique, args) {
							if (args !== undefined) {
								this.native.columnBigint(column, isPrimaryKey, isNullable, isUnique, args);	
							} else {
								if (isUnique) {
									this.native.columnBigint(column, isPrimaryKey, isNullable, isUnique);
								} else {
									if (isNullable) {
										this.native.columnBigint(column, isPrimaryKey, isNullable);
									} else {
										if (isPrimaryKey) {
											this.native.columnBigint(column, isPrimaryKey);
										} else {
											this.native.columnBigint(column);
										}
									}
								}
							}
							
							return this;
						};
						
						this.columnSmallint = function(column, isPrimaryKey, isNullable, isUnique, args) {
							if (args !== undefined) {
								this.native.columnSmallint(column, isPrimaryKey, isNullable, isUnique, args);	
							} else {
								if (isUnique) {
									this.native.columnSmallint(column, isPrimaryKey, isNullable, isUnique);
								} else {
									if (isNullable) {
										this.native.columnSmallint(column, isPrimaryKey, isNullable);
									} else {
										if (isPrimaryKey) {
											this.native.columnSmallint(column, isPrimaryKey);
										} else {
											this.native.columnSmallint(column);
										}
									}
								}
							}
							
							return this;
						};
						
						this.columnReal = function(column, isPrimaryKey, isNullable, isUnique, args) {
							if (args !== undefined) {
								this.native.columnReal(column, isPrimaryKey, isNullable, isUnique, args);	
							} else {
								if (isUnique) {
									this.native.columnReal(column, isPrimaryKey, isNullable, isUnique);
								} else {
									if (isNullable) {
										this.native.columnReal(column, isPrimaryKey, isNullable);
									} else {
										if (isPrimaryKey) {
											this.native.columnReal(column, isPrimaryKey);
										} else {
											this.native.columnReal(column);
										}
									}
								}
							}
							
							return this;
						};
						
						this.columnDouble = function(column, isPrimaryKey, isNullable, isUnique, args) {
							if (args !== undefined) {
								this.native.columnDouble(column, isPrimaryKey, isNullable, isUnique, args);	
							} else {
								if (isUnique) {
									this.native.columnDouble(column, isPrimaryKey, isNullable, isUnique);
								} else {
									if (isNullable) {
										this.native.columnDouble(column, isPrimaryKey, isNullable);
									} else {
										if (isPrimaryKey) {
											this.native.columnDouble(column, isPrimaryKey);
										} else {
											this.native.columnDouble(column);
										}
									}
								}
							}
							
							return this;
						};
						
						this.columnBoolean = function(column, isPrimaryKey, isNullable, isUnique, args) {
							if (args !== undefined) {
								this.native.columnBoolean(column, isPrimaryKey, isNullable, isUnique, args);	
							} else {
								if (isUnique) {
									this.native.columnBoolean(column, isPrimaryKey, isNullable, isUnique);
								} else {
									if (isNullable) {
										this.native.columnBoolean(column, isPrimaryKey, isNullable);
									} else {
										if (isPrimaryKey) {
											this.native.columnBoolean(column, isPrimaryKey);
										} else {
											this.native.columnBoolean(column);
										}
									}
								}
							}
							
							return this;
						};
						
						this.columnBlob = function(column, isNullable, args) {
							if (args !== undefined) {
								this.native.columnBlob(column, isPrimaryKey, isNullable, isUnique, args);
							} else {
								if (isNullable) {
									this.native.columnBlob(column, isPrimaryKey, isNullable);
								} else {						
									this.native.columnBlob(column);
								}
							}
							
							return this;
						};
						
						this.columnDecimal = function(column, precision, scale, isPrimaryKey, isNullable, isUnique, args) {
							if (args !== undefined) {
								this.native.columnDecimal(column, precision, scale, isPrimaryKey, isNullable, isUnique, args);	
							} else {
								if (isUnique) {
									this.native.columnDecimal(column, precision, scale, isPrimaryKey, isNullable, isUnique);
								} else {
									if (isNullable) {
										this.native.columnDecimal(column, precision, scale, isPrimaryKey, isNullable);
									} else {
										if (isPrimaryKey) {
											this.native.columnDecimal(column, precision, scale, isPrimaryKey);
										} else {
											this.native.columnDecimal(column, precision, scale);
										}
									}
								}
							}
							
							return this;
						};
						
						this.primaryKey = function(columns, name) {
							if (name !== undefined) {
								this.native.primaryKey(name, columns);
							} else {
								this.native.primaryKey(columns);
							}
							return this;
						};
						
						this.foreignKey = function(name, columns, referencedTable, referencedColumns) {
							this.native.foreignKey(name, columns, referencedTable, referencedColumns);
							return this;
						};
						
						this.unique = function(name, columns) {
							this.native.unique(name, columns);
							return this;
						};
						
						this.check = function(name, expression) {
							this.native.check(name, expression);
							return this;
						};
						
						this.build = build.bind(this);
						
					}
					
					var createTable = new CreateTable();
					var native = this.native.table(table);
					createTable.native = native;
					return createTable;
				};
				
				this.view = function(view) {
					/**
					 * CreateView object
					 */
					var CreateView = function() {
						
						this.column = function(column) {
							this.native.column(column);
							return this;
						};
						
						this.asSelect = function(select) {
							this.native.asSelect(select);
							return this;
						};
						
						this.build = build.bind(this);
					}
					
					_parameters = [];
					var createView = new CreateView();
					var native = this.native.view(view);
					createView.native = native;
					return createView;
				};
				
				this.sequence = function(sequence) {
					/**
					 * CreateSequence object
					 */
					var CreateSequence = function() {
						
						this.build = build.bind(this);
					}
					
					var createSequence = new CreateSequence();
					var native = this.native.sequence(sequence);
					createSequence.native = native;
					return createSequence;
				};
				
			}
			
			var create = new Create();
			var native = this.native.create();
			create.native = native;
			return create;
		};
		
		this.drop = function() {
			
			/**
			 * Drop object
			 */
			var Drop = function() {
				
				this.table = function(table) {
					/**
					 * DropTable object
					 */
					var DropTable = function() {
						
						this.build = build.bind(this);
					}
					
					var dropTable = new DropTable();
					var native = this.native.table(table);
					dropTable.native = native;
					return dropTable;
				};
				
				this.view = function(view) {
					/**
					 * DropView object
					 */
					var DropView = function() {
						
						this.build = build.bind(this);
					}
					
					var dropView = new DropView();
					var native = this.native.view(view);
					dropView.native = native;
					return dropView;
				};
				
				this.sequence = function(sequence) {
					/**
					 * DropSequence object
					 */
					var DropSequence = function() {
						
						this.build = build.bind(this);
					}
					
					var dropSequence = new DropSequence();
					var native = this.native.sequence(sequence);
					dropSequence.native = native;
					return dropSequence;
				};
				
			}
			
			var drop = new Drop();
			var native = this.native.drop();
			drop.native = native;
			return drop;
		};
	}
	
	var dialect = new Dialect();
	var native;
	if (connection) {
		native = org.eclipse.dirigible.api.v3.db.DatabaseFacade.getNative(connection.native);
	} else {
		native = org.eclipse.dirigible.api.v3.db.DatabaseFacade.getDefault();
	}
	dialect.native = native;
	return dialect;
};
